class NewCity extends React.Component {
	handleSave(event) {
		event.preventDefault();
		const cityname = this.refs.cityname.value;
		const country = this.refs.country.value;
		const link = this.refs.link.value;
		const tag = this.refs.tag.value;

		$.ajax({
			url: '/cities',
			type: 'POST',
			dataType: "JSON",
			data: { city: {city: cityname, country: country, link: link, tag: tag } },
			success: (city) => {
				this.props.handleAdd(city);
				},
			error: () => {
				alert('Fill all data to submit');
			}	
			});
		this.onDataSubmit();
	}

	onDataSubmit() {
		this.refs.cityname.value = "";
		this.refs.country.value = "";
		this.refs.link.value = "";
		this.refs.tag.value = "";
	}

	render() {
		return (
			<div className="new-city-form" id="form" >
				<form onSubmit={this.handleSave.bind(this)} className="new-city-form">
					<div className="form-elms">
						<label>City </label>
						<input type='text' ref='cityname' />
					</div>
					<div className="form-elms">
						<label>Country </label>
						<input type='text' ref='country' />
					</div>
					<div className="form-elms">
						<label>Pic Link </label>
						<input type='text' ref='link' />
					</div>
					<div className="form-elms">
						<label>Tag </label>
						<input type='text' ref='tag' />
					</div>
					<input type="submit" className="hidden-btn" />
				</form>	
			</div>
		)
	}	
};