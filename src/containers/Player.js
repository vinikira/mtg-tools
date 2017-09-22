/**
 * Create by Lucas Corvelo 22/09/2017.
 */
import React from 'react';
import Counter from '../components/Counter.js';

function Player () {
    this.state = {}
}

Player.prototype = new React.Component();
Player.constructor = Player;

Player.prototype.render = function () {
    const { name } = this.props;
    return (
	<div>
	  <p>{name}</p>
	  <Counter />
	</div>
    );
}

export default Player;
