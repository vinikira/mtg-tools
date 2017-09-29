import React from 'react';
import './App.css';
import AddPlayer from './containers/AddPlayer.js';
import Player from './containers/Player.js';

function App () {
    this.state = {
	players: []
    };
}

App.prototype = new React.Component();
App.constructor = App;

App.prototype.render = function () {

    return (
	<div className="App">
	  <AddPlayer addingPlayer={this.addingPlayer.bind(this)}/>
	  {this.state.players}
	</div>
    );
}

App.prototype.addingPlayer = function (playerName) {
    const key = this.state.players.length + 1;
    this.setState({
    	players: this.state.players.concat(<Player name={playerName} key={key} />)
    });
}

export default App;
