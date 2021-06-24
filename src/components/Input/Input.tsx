import React, { ChangeEvent, memo, useEffect } from 'react';
import { useState } from 'react';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
import SmileIcon from '../SvgIcon/SmileIcon';
import styling from './Input.module.scss'
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const StyledTextField = withStyles({
    root: {
        background: 'white',
        width: '290px',
        padding: '3px 30px 3px 9px',
        border: '1px solid #C5D0DB',
        borderRadius: '4px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
        color: '#000000',
        resize: 'none',
        outline: 'none',
        textAlign: 'center',
    },
})(TextField);

const Input = memo(() => {
    const [show, setShow] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        document.addEventListener('keydown', showEscHandler)
        return () => {
            document.removeEventListener('keydown', showEscHandler)
        }
    }, [])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

    const emojiHandler = (emoji: string) => setInputValue(prev => prev + emoji)

    const showHandler = () => setShow(show => !show)

    const showEscHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 27) setShow(false)
    }

    return (
        <div className={styling.input_container}>
            <StyledTextField rowsMax={8} InputProps={{ disableUnderline: true, style: { fontSize: 13 } }} multiline value={inputValue} onChange={onChangeHandler} placeholder={'Ваше сообщение'} />
            <button type='button' className={styling.input_container__button} onClick={showHandler}>
                <SmileIcon />
            </button>
            {show && <div className={styling.input_container__epicker_corner}><EmojiPicker inputEmojiHandler={emojiHandler} /></div>}
        </div>
    );
});

export default Input;