import React, {Component} from 'react';
import {connect} from 'react-redux'
import CardList from '../Components/CardList';
//Now use API
// import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

import {setSearchField, requestRobots} from '../actions.js'

const mapStateToProps = state => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}


	render() {
		const {searchField, onSearchChange, robots, isPending}= this.props;
		const searchedRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(isPending)
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