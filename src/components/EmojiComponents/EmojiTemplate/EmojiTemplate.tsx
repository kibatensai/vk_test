import React, { FC, KeyboardEvent, memo, useRef, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useScroll } from '../../../hooks/useScroll';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styling from './EmojiTemplate.module.scss';

interface IEmojiTemplate {
    emojiHandler: (emoji: string) => void
}

const EmojiTemplate: FC<IEmojiTemplate> = memo(({ emojiHandler }) => {
    const { data, currentData } = useTypedSelector(state => state.emoji)
    const [dataLength, setDataLength] = useState<number>(1)
    const { setCurrentData } = useActions()
    const parentRef = useRef<any>()
    const childRef = useRef<any>()
    const intersected = useScroll(parentRef, childRef, additionalDataOnScroll)

    function additionalDataOnScroll() {
        if (dataLength < data.length) {
            setCurrentData(data[dataLength].items)
            setDataLength(prev => prev + 1)
        }
    }

    const clickHandler = (emoji: string) => emojiHandler(emoji)

    const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>, emoji: string) => { if (e.key === 'Enter') emojiHandler(emoji) }

    const mappedData = currentData.map((elem, i) =>
        <div key={`unique-${i}`} tabIndex={1} className={styling.emoji_template_container__item} onClick={() => clickHandler(elem)} onKeyPress={(e) => keyPressHandler(e, elem)}>{elem}</div>
    )

    return (
        <div ref={parentRef} className={styling.emoji_template_container}>
            {mappedData}
            <div ref={childRef} style={{ height: 20 }}></div>
        </div>
    );
});

export default EmojiTemplate;