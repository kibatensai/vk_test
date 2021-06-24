import { data, IDataElement } from "../data/emojidata";

export const SET_RECENT_EMOJIS = "emoji/SET_RECENT_EMOJIS";
export const SET_CURRENT_DATA = "emoji/SET_CURRENT_DATA";

interface RecentEmojiAction {
  type: typeof SET_RECENT_EMOJIS;
  payload: string;
}

interface CurrentEmojiAction {
  type: typeof SET_CURRENT_DATA;
  payload: string[];
}

export type EmojiActions = RecentEmojiAction | CurrentEmojiAction;

interface IInitialState {
  data: IDataElement[];
  recentEmojis: string[];
  currentData: string[];
}

const initialState: IInitialState = {
  data,
  recentEmojis: [],
  currentData: [...data[0].items],
};

export const emojiReducer = (
  state = initialState,
  action: EmojiActions
): IInitialState => {
  switch (action.type) {
    case SET_RECENT_EMOJIS:
      return {
        ...state,
        recentEmojis:
          state.recentEmojis.length === 25
            ? [action.payload, ...state.recentEmojis.slice(0, -1)]
            : [action.payload, ...state.recentEmojis],
      };
    case SET_CURRENT_DATA:
      return {
        ...state,
        currentData: [...state.currentData, ...action.payload],
      };
    default:
      return state;
  }
};
