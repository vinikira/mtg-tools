/**
 * Create by Lucas Corvelo 22/09/2017.
 */
import React from 'react';
import CounterButton from '../components/CounterButton.js';

function Counter () {
    this.state = {
	lifeValue: 20
    };
}

Counter.prototype = new React.Component();
Counter.constructor = Counter;

Counter.prototype.componentDidMount = function () {

}

Counter.prototype.render = function () {
    const { lifeValue } = this.state;

    return (
	<div>
	    <CounterButton countFunction={this.increment.bind(this)} text="+"/>
	  <p>{lifeValue}</p>
	    <CounterButton countFunction={this.decrement.bind(this)} text="-"/>
	</div>
    );
}

Counter.prototype.increment = function () {
    return this.setState({
	lifeValue: this.state.lifeValue + 1
    })
}

Counter.prototype.decrement = function () {
    return this.setState({
	lifeValue: this.state.lifeValue - 1
    })
}

export default Counter;
