import React, { FC, memo, useMemo } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import EmojiTemplate from '../EmojiComponents/EmojiTemplate/EmojiTemplate';
import RecentEmojis from '../EmojiComponents/RecentEmojis/RecentEmojis';
import RecentIcon from '../SvgIcon/RecentIcon';
import SmileIcon from '../SvgIcon/SmileIcon';
import { Tabs } from '../Tabs/Tabs';
import styling from './EmojiPicker.module.scss';

interface IEmojiPicker {
    inputEmojiHandler: (emoji: string) => void
}

const EmojiPicker: FC<IEmojiPicker> = memo(({ inputEmojiHandler }) => {
    const { recentEmojis } = useTypedSelector(state => state.emoji)
    const { setRecentEmojis } = useActions()

    const emojiHandler = (emoji: string) => {
        inputEmojiHandler(emoji)
        if (recentEmojis.length <= 25 && !recentEmojis.includes(emoji)) setRecentEmojis(emoji)
    }

    const renderData = useMemo(() => [
        {
            title: <SmileIcon />,
            component: <>
                <p className={styling.emoji_picker_container__title}>Эмоции</p>
                <EmojiTemplate emojiHandler={emojiHandler} /></>,
        },
        {
            title: <RecentIcon />,
            component: <><p className={styling.emoji_picker_container__title}>Последние использованные</p>
                <RecentEmojis emojiHandler={emojiHandler} /></>,
        },
    ], [recentEmojis])

    return (
        <div className={styling.emoji_picker_container}>
            <Tabs
                data={renderData}
            />
        </div>

    );
});

export default EmojiPicker;