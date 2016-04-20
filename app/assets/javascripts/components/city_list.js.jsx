const PlaceList = (props) => {
	const citiesListItems = props.cities.map((city) => {
		return (
			<City 
				key={city.id}
				city={city} />
		);
	})
	return (
		<ul>{citiesListItems}</ul>
	)
};