const City = ({city}) => {
	return (
		<li>
			<img src={city.link} />
			<div className="city-desc">
				<p className="city-name">{city.city} - in the beautiful {city.country} </p>
				<p className="tag">#{city.tag}</p>
			</div>
		</li>
	)
};