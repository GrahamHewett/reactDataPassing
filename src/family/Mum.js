import React from 'react';
import Son from './Son'
import Daughter from './Daughter'

class Mum extends React.Component {
	constructor() {
		super()
		this.state.dinner = {son: 'unknown', daughter: 'unknown'}
	}

talktoChildren(child, dinner) {

}
	render() {
		return (
			<React.Fragment>
				<Son talktoMum={this.talktoChildren}>
				</Son>
				<p>My son wants {this.state.dinner.son} for dinner</p>
				<Daughter talktoMum={this.talktoChildren}>
				</Daughter>
				<p>My daughter wants {this.state.dinner.son} for dinner</p>
			</React.Fragment>
		)
	}
}

export default Mum;