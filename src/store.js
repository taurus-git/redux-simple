import { createStore } from "redux";
import numberReducer from "./reducers/numberReducer";

const store = createStore(
    numberReducer
);

export default store;
