import React from 'react'

class Son extends React.Component {
	constructor(){
		super()
		this.state = {dinner: 'pasta'}
	}

	updateMeal() {
		this.props.talkToDad(this.state.dinner)
	}
	render() {
			return (
				<div>
					{console.log(this.props.talkToMum)}
					I am the son. My Mum's name is {this.props.mumName}
					<button onClick={() => this.updateMeal()}>
					Send Choice to Dad
					</button>
				</div>
			)
		}
}
export default Son;
