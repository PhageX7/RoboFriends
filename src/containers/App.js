import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfeild: ''
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchfeild: event.target.value });
	};

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	render() {
		const { robots, searchfeild } = this.state;

		const changedRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
		});

		return robots.length === 0 ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="font-face-sega">Robo Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={changedRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
