import { INCREMENT_NUMBER, DECREMENT_NUMBER } from '../actions/actionTypes';

const initialState = {
    number: 0,
};

const numberReducer = ( state = initialState, action ) => {
    console.log( state );
    switch ( action.type ) {
        case INCREMENT_NUMBER:
            return {
                ...state,
                number: state.number + 1,
            }
        case DECREMENT_NUMBER:
            return {
                ...state,
                number: state.number - 1,
            }
        default:
            return state;
    }
}

export default numberReducer;
