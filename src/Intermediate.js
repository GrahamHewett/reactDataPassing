import React, { Component } from 'react';

class User extends React.Component{
	constructor() {
		super() // What is super() part of js or React? Why use it?
		this.state = {isLastNameVisible: true};
	}
	toggleLastName() {
		this.setState({isLastNameVisible: !this.state.isLastNameVisible})
	}
	render() {
		const {firstName, lastName} = this.props
		return (
			<div>
				{firstName} 
				{this.state.isLastNameVisible && lastName}
				<button onClick={()=> this.toggleLastName()}>
					Toggle Last Name
				</button>
			</div>
	)
	}
}

export default User;
