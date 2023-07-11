import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../actions/numberAction";

function Counter() {
    const { number, text } = useSelector( state => state );
    const dispatch = useDispatch();

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
        </div>
    );
}

export default Counter;
