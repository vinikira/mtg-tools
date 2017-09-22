/**
 * Create by Lucas Corvelo 21/09/2017
 */
import React from 'react';

function ComponentExample () {
    this.state = {
	isLoading: true,
	haveError: false
    }
}

ComponentExample.prototype = new React.Component();
ComponentExample.constructor = ComponentExample;

ComponentExample.prototype.componentDidMount = function () {
    this.delayMounting();
    console.log('component did mount!');
}

ComponentExample.prototype.render = function () {
    const { isLoading, haveError } = this.state;

    if (isLoading) {
	return (
		<div>
		   <p>To carregando ainda!</p>
		</div>
	)
    }

    if (haveError) {
	return (
		<div>
		   <p>Vesh, deu erro</p>
		</div>
	)
    }

    return (
	    <div>
	       <p>Oi, meu nome é componente ComponentExample</p>
	    </div>
    )
}

ComponentExample.prototype.delayMounting = function () {
    setTimeout(() => {
	this.setState({
	    isLoading: false
	})
    }, 5000);
}


ComponentExample.prototype.componentWillUnmount = function () {
    console.log('component will unmount!');
}

export default ComponentExample;
