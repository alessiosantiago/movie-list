import React, {Component} from 'react';
import Card from './Card'

class List extends Component
{
	state = {
		isLoading: true,
		data: [],
		error: null
	};
	getFetchData() {//fetch data from json database
		this.setState({
			loading: true
		}, () => {
			fetch("http://localhost:3000/recommendations").then(res => res.json()).then(result => this.setState({
				loading: false,
				data: result
			})).catch(console.log);
		});
	}
	componentDidMount() {
		this.getFetchData();
	}
render()
{
  const { data, loading} = this.state;

  if(loading)
  {
    return <div>Loading... </div>
  }
  return data.map(movie => <Card key = { movie.id } movie = { movie }/>);


}
}

export default List;