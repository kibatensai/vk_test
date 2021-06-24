import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../bll/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector