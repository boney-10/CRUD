import React from 'react';

class Edit extends React.Component{
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


  componentDidMount() {
    axios.get('/'+this.props.match.params.Jno)
    .then(response => {
      this.setState({firstName: response.data.first_name, lastName: response.data.last_name, e})
    })
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