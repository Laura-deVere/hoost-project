const City = ({city}) => {
	const picStyle = {
		height: '150px',
		width: '200px'
	}
	return (
		<li>
			<img src={city.link} style={picStyle} />
			<p>{city.city} - in the beautiful {city.country} </p>
			<p className="tag">#{city.tag}</p>
		</li>
	)
};