import { UPDATE_TEXT } from "./actionTypes";

export const updateText = ( inputText ) => {
    return {
        type: UPDATE_TEXT,
        payload: inputText
    }
}
