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
				<h1>Hello World!</h1>
				<PlaceList cities={this.state.cities} />
			</div>
		)
	}
}