import React from 'react'
import axios from 'axios';
import RecordsList from './RecordList';

class View extends React.Component {
  constructor(props){
    super(props);
    this.state = {players: []};
  }
  componentDidMount(){
    axios.get('')
    .then(response => {
      this.setState({players: response.data});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  userList(){
    return this.state.players.map(function(object, i){
      return <RecordsList obj={object} key={i} />;
     });
  }
  render() {
    return (
      <div>
        <h3 align="center"> Users List</h3>
        <table className="table table-striped" style={{ marginTop: 20}}>
          <thead>
            <tr>
              <th>Fname</th>
              <th>Lname</th>
              <th>Email</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default View