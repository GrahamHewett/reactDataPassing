import React from 'react';
import { Link } from 'react-router-dom';
import UserInt from './Intermediate'

const begProps = {pathname:"/beginner", firstName: "Gray", lastName: "Hewett"}
const IntProps = {pathname:"/intermediate", firstName: "Gray", lastName: "Hewett"}

function Home(props) {
	return (
		<React.Fragment>
		<Link to={begProps} firstName='Gray'><h2>Beginner</h2></Link>
		<Link to={IntProps}><h2>Intermediate</h2></Link>
		<UserInt {...IntProps}></UserInt>
		</React.Fragment>
	)
}

export default Home;