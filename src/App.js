import React, { Component } from 'react';
import './App.css';
import Player from './containers/Player.js';


class App extends Component {
    render() {
	return (
	    <div className="App">
	      <Player name='Lucas'/>
	    </div>
	);
    }
}

export default App;
