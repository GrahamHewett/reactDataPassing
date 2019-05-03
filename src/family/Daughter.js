import React from 'react'

class Son extends React.Component {
	constructor(props){
		super(props)
		this.state ={dinner:'nothing'}
	}
	render() {
			return (
				<React.Fragment>
					<button onClick={() => this.props.talktoParent()}>
					</button>
				</React.Fragment>
			)
		}
}
export default Son;
