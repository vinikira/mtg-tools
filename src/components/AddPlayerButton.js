/**
 * Create by Lucas Corvelo 28/09/2017.
 */
import React from 'react';

const AddPlayerButton = ({ addPlayerFunction }) => {
    return (
	    <button onClick={addPlayerFunction}>Add Player</button>
    );
}

export default AddPlayerButton;
