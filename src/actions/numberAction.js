export const incrementNumber = () => {
    return {
        type: 'INCREMENT_NUMBER',
        payload: 'plus',
    };
};

export const decrementNumber = () => {
    return {
        type: 'DECREMENT_NUMBER',
        payload: 'minus'
    };
};
