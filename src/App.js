import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name:     '',
        surname:  '',
        age:      '',
        hobbies:  ''
      },
      errors: {
        name:     '',
        surname:  '',
        age:      '',
        hobbies:  ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { formData, errors } = this.state;

    const result = this.validation(formData, errors);

    result == true ? console.log('Yes !') : console.log('No !')
    
  }

  validation = (fields, errors) => {
    const errorMsg = 'This field is required';
    const keys = Object.keys(fields);

    let i = 0;

    for(const key of keys){
      if(fields[key].length == 0){
        errors[key] = errorMsg;
        i++
      }else{
        errors[key] = '';
      }
    }

    this.setState({
      errors: errors
    });
    
    const result = i == 0 ? true : false;

    return result;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-5">
              <div className="col-md-6 float-left">
                <form action="javascript:void(0);" onSubmit={(e) => this.handleSubmit(e)}>

                  <div className="form-group">
                    <label>Name</label>
                    <input 
                      onChange={this.handleChange} 
                      type="text"
                      name="name" 
                      className="form-control" 
                      placeholder="Name" />
                      {
                        this.state.errors.name && (
                          <small id="emailHelp" className="error-msg form-text ">
                            {this.state.errors.name}
                          </small>
                        )
                      }
                  </div>
                  <div className="form-group mt-3">
                    <label>Surname</label>
                    <input 
                      onChange={this.handleChange} 
                      type="text" 
                      name="surname"
                      className="form-control" 
                      placeholder="Surname" />
                      {
                        this.state.errors.surname && (
                        <small id="emailHelp" className="error-msg form-text ">
                          {this.state.errors.surname}
                        </small>
                        )
                      }
                  </div>


                  <div className="form-group mt-3">
                    <label>Age</label>
                    <input 
                      onChange={this.handleChange} 
                      type="text"
                      name="age" 
                      className="form-control" 
                      placeholder="Age" />
                      {
                        this.state.errors.age && (
                        <small id="emailHelp" className="error-msg form-text ">
                          {this.state.errors.age}
                        </small>
                        )
                      }
                  </div>

                  <div className="form-group mt-3">
                    <label>Hobbies</label>
                    <input 
                      onChange={this.handleChange} 
                      type="text" 
                      name="hobbies"
                      className="form-control" 
                      placeholder="Hobbies" />
                      {
                        this.state.errors.hobbies && (
                        <small id="emailHelp" className="error-msg form-text ">
                          {this.state.errors.hobbies}
                        </small>
                        )
                      }
                  </div>

                  <button type="submit" className="mt-3 btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
