import React, { Component } from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                     name:'',
                     age: '',
                     sal:'',
                     address:'',
                     qualification:'',
                     isMarried:false,
                     gender:''
                   };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
      this.setState({
                       [name]: value
                    });
    }
  
    handleSubmit(event) {
      alert('Name : ' + this.state.name);
      alert('Age : ' + this.state.age);
      alert('Salary : ' + this.state.sal);
      alert('Address : ' + this.state.address);
      alert('Qualification : ' + this.state.qualification);
      alert('Is Married : ' + this.state.isMarried);
      alert('Gender : ' + this.state.gender);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label> <br/>
          <label>
            Age :
            <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          </label> <br/>
          <label>
            Salary :
            <input type="text" name="sal" value={this.state.sal} onChange={this.handleChange} />
          </label>  <br/>
          <label>
            Address :
            <textarea name="address" value={this.state.address} onChange={this.handleChange} />
          </label>  <br/>
          <label>
            Qualification :
            <select name="qualification" value={this.state.qualification} onChange={this.handleChange}>
              <option value="">Please Select</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BTECH">BTECH</option>
              <option value="MTECH">MTECH</option>
            </select>
          </label>  <br/>
          <label>
            Is Married :
            <input type="checkbox" name="isMarried" checked={this.state.isMarried} onChange={this.handleChange} />
          </label> <br/>
          <label>
            Gender :
            Male
            <input type="radio" name="gender" value="M" onChange={this.handleChange} />
            Female
            <input type="radio" name="gender" value="F" onChange={this.handleChange} />
          </label> <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CustomerForm;