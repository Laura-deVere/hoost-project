const City = ({city, handleDelete}) => {
	return (
		<li>
			<i className="ion-android-close delete" onClick={()=> handleDelete(city.id)}></i>
			<img src={city.link} />
			<div className="city-desc">
				<p className="city-name">{city.city} - in the beautiful {city.country} </p>
				<p className="tag">#{city.tag}</p>
			</div>
		</li>
	)
};