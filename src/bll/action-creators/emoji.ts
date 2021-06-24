import { SET_CURRENT_DATA, SET_RECENT_EMOJIS } from "../reducers/emojiReducer";

export const setRecentEmojis = (emoji: string) => ({type: SET_RECENT_EMOJIS, payload: emoji}) as const

export const setCurrentData = (currentData: string[]) => ({type: SET_CURRENT_DATA, payload: currentData}) as const