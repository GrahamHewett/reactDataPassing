import React from 'react';
import Son from './Son'
import Daughter from './Daughter'

class Mum extends React.Component {

talktoChildren(child, dinner) {
	
}
	render() {
		return (
			<React.Fragment>
				<Son talktoMum={()=> this.talktoChildren}>
				</Son>
				<Daughter talktoMum={()=> this.talktoChildren}>
				</Daughter>
			</React.Fragment>
		)
	}
}

export default Mum;