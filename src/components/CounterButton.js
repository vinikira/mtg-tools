/**
 * Create by Lucas Corvelo 22/09/2017.
 */
import React from 'react';

const buttonStyle = {
    color: 'blue',
    backgroundColor: 'gray'
};

const CounterButton = ({ countFunction, text }) => {
    return (
	    <button style={buttonStyle} onClick={countFunction}>{text}</button>
    );
}

export default CounterButton;
