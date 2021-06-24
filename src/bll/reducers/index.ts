import { combineReducers } from "redux";
import { emojiReducer } from "./emojiReducer";

export const rootReducer = combineReducers({
    emoji: emojiReducer
})

export type RootState = ReturnType<typeof rootReducer>