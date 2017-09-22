/**
 * Create by Lucas Corvelo 22/09/2017.
 */
import React from 'react';

const CounterButton = ({ countFunction, text }) => {
    return (
	    <button onClick={countFunction}>{text}</button>
    );
}

export default CounterButton;
