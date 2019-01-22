import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
	
	this.state={
		students:[]
	}
    
  }
  componentDidMount(){
	  axios.get("http://localhost:3005/students?class=" + this.props.match.params.class).then( (res) =>{
		  this.setState({students:res.data});
	  });
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
		{
			this.state.students.map( (val, i) => {
				return(
					<Link to={`/student/${val.id}`} key={i}><h3>{val.first_name} {val.last_name}</h3></Link>
				)
			})
		}
		<Link to='/'><button>Back</button></Link>
      </div>
    )
  }
}