import React, {Component} from 'react';
import {connect} from 'react-redux'
import CardList from '../Components/CardList';
//Now use API
// import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

import {setSearchField} from '../actions.js'

const mapStateToProps = state => {
	return{
		searchField: state.searchField
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
	}


	render() {
		const {robots} =this.state;
		const {searchField, onSearchChange}= this.props;
		const searchedRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(!robots.length)
			return (<h1 className="tc f2">Loading</h1>);
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={searchedRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
				);}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);