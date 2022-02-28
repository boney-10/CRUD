import React from 'react';
import axios from 'axios';
class Insert extends React.Component {
  constructor(props){
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  onChangeFirstName(e){
    this.setState({firstName: e.target.value});
  }
  onChangeLastName(e){
    this.setState({lastName: e.target.value})
  };
  onChangeEmail(e){
    this.setState({email: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();

    const obj={
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email
    };
   axios.post('', obj)
   .then(res => console.log(res.data));
    //console.log(obj)
  }
  render() {
  return (
    <div style={{marginTop: 10}}>
     <h3>Add a new user</h3> 
     <form onSubmit={this.onSubmit}>
       <div className="form-group">
         <label>First Name</label>
         <input type="text" className="form-control"
         value={this.state.firstName}
         onChange={this.onChangeFirstName}/>
       </div>
       <div className="form-group">
         <label>Last Name</label>
         <input type="text" className="form-control"
         value={this.state.lastName}
         onChange={this.onChangeLastName}/>
       </div>
       <div className="form-group">
         <label>Email</label>
         <input type="email" className="form-control"
         value={this.state.email}
         onChange={this.onChangeEmail}/>
       </div><br/>
       <div className="form-group">
         <input type="submit" value="Register User" className="btn btn-primary"/>
       </div>
     </form>
    </div>
  )
}
}
export default Insert;
