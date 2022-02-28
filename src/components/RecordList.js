import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router'; 
import {Link} from 'react-router-dom';

class RecordList extends React.Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      redirect: false
    }
  }

  delete(){
    axios.get('' +this.props.obj.Jno)
    .then(
      this.setState({redirect: true})
    )
    .catch(err => console.log(err))
  }
  render() {
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to='/View'/>
    }
    return(
      <tr>
        <td>
          {this.props.obj.Fname}
        </td>
        <td>
          {this.props.obj.Lname}
        </td>
        <td>
          {this.props.obj.Email}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.Jno} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button> 
        </td>
      </tr>
    )
  }
}