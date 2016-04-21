class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			cities: []
		};
	}

	componentDidMount() {
		$.getJSON('cities.json', (response) => {this.setState({ cities: response }) });
	}

	render() {
		return (
			<div>
				<NewCity />
				<SearchBar />
				<PlaceList cities={this.state.cities} />
			</div>
		)
	}
}