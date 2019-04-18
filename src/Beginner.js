import React from 'react';
import Intermediate from './Intermediate'

function User(props) {
	return (
		<React.Fragment>
		<div>
			{props.location.firstName}
		</div>
		<div>
			{props.location.lastName}
		</div>
		<Intermediate firstName='Eva' lastName='Green'></Intermediate>
		</React.Fragment>
	)
}

export default User;