const initialState = {
    number: 0,
    text: 'zero'
};

const numberReducer = ( state = initialState, action ) => {
    console.log( state );
    switch ( action.type ) {
        case 'INCREMENT_NUMBER':
            return {
                ...state,
                number: state.number + 1,
                text: action.payload,
            }
        case 'DECREMENT_NUMBER':
            return {
                ...state,
                number: state.number - 1,
                text: action.payload,
            }
        default:
            return state;
    }
}

export default numberReducer;
