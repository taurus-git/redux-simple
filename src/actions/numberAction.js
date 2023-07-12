import { INCREMENT_NUMBER, DECREMENT_NUMBER } from './actionTypes';

export const incrementNumber = () => {
    return {
        type: INCREMENT_NUMBER,
        payload: 'plus',
    };
};

export const decrementNumber = () => {
    return {
        type: DECREMENT_NUMBER,
        payload: 'minus'
    };
};
