import React from 'react';
import Son from './Son'
import Daughter from './Daughter'

class Mum extends React.Component {
	constructor(props) {
		super(props)
		this.state = {'sonDinner': 'unknown', 'daughterDinner': 'unknown'}
	}

talkToSon(meal) {
	this.setState({
		sonDinner: meal
	});
}
talkToDaughter(meal) {
	this.setState({
		'daughterDinner': meal
	});

}
	render() {
		return (
			<React.Fragment>
				{console.log(this.state.dinner)}
				<div><p>My son wants {this.state.sonDinner} for dinner</p>
				</div>
				<Son talkToMum={(meal) => this.talkToSon(meal)}
				mumName="Adriana">
				</Son>
				<p>My daughter wants {this.state.daughterDinner} for dinner</p>
				<Daughter talkToMum={(meal) => this.talkToDaughter(meal)}>
				</Daughter>
			</React.Fragment>
		)
	}
}

export default Mum;