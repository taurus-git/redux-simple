import { createSelector } from "reselect";

const getNumberState = state => state.number;
export const getNumber = createSelector(
    getNumberState,
    ( numberState ) => numberState.number
);

const getTextState = state => state.text;
export const getText = createSelector(
    getTextState,
    ( textState ) => textState.text
)
