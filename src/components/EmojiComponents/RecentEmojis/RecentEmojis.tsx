import React, { FC, memo, KeyboardEvent } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import styling from './RecentEmojis.module.scss';

interface IRecentEmojis {
    emojiHandler: (emoji: string) => void
}

const RecentEmojis: FC<IRecentEmojis> = memo(({ emojiHandler }) => {
    const { recentEmojis } = useTypedSelector(state => state.emoji)

    const clickHandler = (emoji: string) => emojiHandler(emoji)

    const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>, emoji: string) => { if (e.key === 'Enter') emojiHandler(emoji) }

    const mappedData = recentEmojis.map((elem, i) =>
        <div key={`unique-${i}`} tabIndex={1} className={styling.recent_emoji_container__item} onClick={() => clickHandler(elem)} onKeyPress={(e) => keyPressHandler(e, elem)}>{elem}</div>
    )

    return (
        <div className={styling.recent_emoji_container}>
            {mappedData}
        </div>
    );
});

export default RecentEmojis;