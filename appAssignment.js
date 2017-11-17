
class FacultyList extends React.Component {

	state = {
		depts: [],
	};

	render() {
		const depts = this.state.depts.sort((a, b) => (
			b.votes - a.votes
		));
		const departmentComponents = departments.map((department) => (
				<Department
					key={'department-' + product.id}
					id={department.id}
					faculty={product.faculty}
					department={product.department}
			));
		return(
			<div className='ui unstackable items'>
				{departmentComponents}
			</div>
			);
	}
}

class Department extends React.Component {
	/*handleUpVote = () => (
		this.props.onVote(this.props.id)
	);*/

	render() {
		return(
			<div className='item'>
				<div className='middle aligned content'>
					<div className='header'>
							{this.props.id}
					</div>
					<div className='description'>
						<a href={this.props.url}>
							{this.props.department}
						</a>
						<p>
							{this.props.faculty}
						</p>
					</div>
					<div className='extra'>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<FacultyList />,
	document.getElementById('content')
);