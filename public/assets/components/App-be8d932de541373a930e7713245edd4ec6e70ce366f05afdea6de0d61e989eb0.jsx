class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			query: '',
			cities: [],
			showForm: false
		};
	}

	componentDidMount() {
		$.getJSON('cities.json', (response) => {this.setState({ cities: response }) });
	}

	onSearch(query) {
	console.log(query);
	console.log('hello');
		let queryResult = [];
		let cities = this.props.cities;
		let newQuery = query.toLowerCase();
		console.log(newQuery);
		cities.map((city) => {
			if((city.city.toLowerCase().indexOf(newQuery)!=-1))
				queryResult.push(city);
		});
		this.setState({
			query: query,
			cities: queryResult
		});
	}

	handleAdd(city) {
		const newState = this.props.cities.concat(city);
		this.setState({ cities: newState })
	}

	onShowForm() {
		if(!this.state.showForm) {
		this.setState({
			showForm: true
		}); 
		} else  {this.setState({
			showForm: false
			});
		}
	}

	render() {
		const btnStyle = {
			backgroundColor: 'white'
		};
		if (this.state.showForm) {
			btnStyle['backgroundColor'] = "#ff4c4c";
		}
		return (
			<div className="container">
				<header className="header">
					<img src="/assets/logo-b6655a5990106fd7578a84ac37f686ee1c8b1448699d43d9520674545c39686b.png" className="logo" />
					<div className="form-btn" onClick={this.onShowForm.bind(this)} style={btnStyle}>
						<img src="/assets/plus-54c7d511e6f71509e1a8b1b38bc7679d70df18f7c559e3534ef3b90d8994aaa4.png" />
					</div>
					{this.state.showForm ? <NewCity handleAdd={this.handleAdd.bind(this)} /> : null }
				</header>
				<main className="main-section">
					<SearchBar onSearch={this.onSearch.bind(this)} query={this.state.query} />
					<PlaceList cities={this.state.cities} />
				</main>
				<footer className="footer"></footer>
			</div>
		)
	}
}