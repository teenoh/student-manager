import React, { Component } from "react";
import axios from "axios";
import config from "../../config";
import { Redirect } from 'react-router-dom'
import FormField from './FormField'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: [
        {
          name: "firstName",
          label: "First Name",
          type: "text"
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text"
        },
        {
          name: "email",
          label: "Email address",
          type: "email"
        },
        {
          name: "sex",
          label: "Sex",
          type: "text"
        },
        {
          name: "department",
          label: "Department",
          type: "text"
        },
        {
          name: "level",
          label: "Level",
          type: "text"
        },
        {
          name: "location",
          label: "Location",
          type: "text"
        }
      ],
      data: {},
      redirect: false
    };

    this.submitForm = this.submitForm.bind(this);
    this.saveToState = this.saveToState.bind(this);
  }

  saveToState(e) {
    const { name, value } = e.target;
    const newData = Object.assign(this.state.data, { [name]: value });
    this.setState({ data: newData });
    console.log(this.state.data);
  }

  submitForm(e) {
    e.preventDefault();
    console.log(e);
    const form_data = this.state.data;
    console.log("this.state.data => ", form_data);
    axios
      .post(`${config.serverUrl}/api/students`, form_data)
      .then(res => {
        console.log(res);
        this.setState({redirect: !this.state.redirect})
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect) {
      return  <Redirect to='/' />
    }
    return (
      <div className="container">
        <div className="text-center" style={{ margin: 40 }}>
          <h2>Add a New Student</h2>
        </div>

        <form style={{ margin: 16 }}>
          {this.state.form.map((item, id) => (
            <FormField
              key={id}
              fieldChange={this.saveToState}
              value={this.state.data[item.name]}
              field={item}
            />
          ))}

          <div className="center">
            <div className="text-center">
              <input
                type="submit"
                value="create"
                onClick={this.submitForm}
                className="btn btn-primary btn-success"
              />
            </div>

            <br />
          </div>
        </form>
      </div>
    );
  }
}
