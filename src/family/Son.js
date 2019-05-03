import React from 'react'

class Son extends React.Component {
	constructor(props){
		super(props)
		this.state ={dinner:'nothing'}
	}
	render() {
			return (
				<React.Fragment>
					<button onClick={this.props.talkToMum}>
					Talk to Mum
					</button>
					<button onClick={() => this.props.talkToDad()}>
					Talk to Dad
					</button>
				</React.Fragment>
			)
		}
}
export default Son;
