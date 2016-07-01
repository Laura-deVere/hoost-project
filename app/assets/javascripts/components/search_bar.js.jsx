class SearchBar extends React.Component {
	citySearch() {
		let query = this.refs.searchInput.value;
		this.props.onSearch(query);
	}

	render() {
		return (
			<section className="hero">
				<div className="search-bar">
					<h2>Adventure is worthwhile</h2>
						<input ref="searchInput" onChange={this.citySearch.bind(this)} 
							value={this.props.query} placeholder="Search..."/>
				</div>	
			</section>
		)
	}
};