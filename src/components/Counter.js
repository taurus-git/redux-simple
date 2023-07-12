import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../actions/numberAction";
import { updateText } from "../actions/textActions";
import { getNumber, getText } from "../selectors/selectors";

function Counter() {
    const { number } = useSelector( getNumber );
    const { text } = useSelector( getText );
    const dispatch = useDispatch();

    const handleTextChange = ( e ) => {
        dispatch( updateText( e.target.value ) );
    }

    return (
        <div>
            <p>{ number }</p>
            <p>{ text }</p>
            <button onClick={ () => dispatch( incrementNumber() ) }>
                Increment
            </button>
            <button onClick={ () => dispatch( decrementNumber() ) }>
                Decrement
            </button>
            <input type="text" value={ text } onChange={ handleTextChange }/>
        </div>
    );
}

export default Counter;
