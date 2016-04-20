const City = ({city}) => {
	return (
		<li>
			<img src={city.link} />
			<p>{city.city} - in the beautiful {city.country} </p>
		</li>
	)
};