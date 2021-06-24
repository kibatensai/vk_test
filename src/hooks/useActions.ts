import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as EmojiActionCreators from '../bll/action-creators/emoji'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(EmojiActionCreators, dispatch)
}