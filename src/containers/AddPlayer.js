/**
 * Create by Lucas Corvelo 22/09/2017.
 */
import './Player.css';
import React from 'react';
import Counter from '../components/Counter.js';
import Player from '../containers/Player.js';
import AddPlayerButton from '../components/AddPlayerButton.js';

function AddPlayer () {
    this.state = {
	choseName: false
    }
}

AddPlayer.prototype = new React.Component();
AddPlayer.constructor = AddPlayer;

AddPlayer.prototype.render = function () {

    const component =
	  <div>
    	  <input id='choosePlayerInput' type='text' defaultValue={'Player Default'} />
    	  <button onClick={this.managePlayer.bind(this)}>Adicionar</button>
    	  </div>;

    return (
	<div>
	  {this.state.choseName ? component : ''}
	  <AddPlayerButton addPlayerFunction={this.chosePlayerName.bind(this)}/>
	</div>
    )
}

AddPlayer.prototype.managePlayer = function () {
    const { addingPlayer } = this.props;
    const playerName = document.getElementById('choosePlayerInput').value;
    this.setState({
	choseName: false
    })
    addingPlayer(playerName);
}


AddPlayer.prototype.chosePlayerName = function () {
    this.setState({
	choseName: true
    })
}


export default AddPlayer;
