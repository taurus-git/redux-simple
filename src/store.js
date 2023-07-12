import { createStore, combineReducers } from "redux";
import numberReducer from "./reducers/numberReducer";
import textReducer from "./reducers/textReducer"

const rootReducer = combineReducers( {
    number: numberReducer,
    text: textReducer
} )

const store = createStore(
    rootReducer
);

export default store;
