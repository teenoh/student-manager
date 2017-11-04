import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StudentList from './StudentList'
import NewStudent from './NewStudent'
import EditStudent from './EditStudent'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Valentino Hava",
          level: "300",
          dept: "Electrical and Electronics Engineering"
        },
        {
          name: "Rodrigo Azipicuelta",
          level: "200",
          dept: "Petroleum Engineering"
        },
        {
          name: "Dennis Bobo",
          level: "300",
          dept: "Mechanical Engineering"
        }
      ]
    };
  }


  componentDidMount(){
    axios.get('http://127.0.0.1:8080/api/students')
          .then(res => console.log(res.data))
  }


  render() {
    return (
      <Switch>
        <Route exact path="/new" component={NewStudent} />
        <Route exact path="/edit/:student" component={EditStudent} />
        <Route exact path="/" render={() => <StudentList data={this.state.data}/>} />
        <Route render={() => <StudentList data={this.state.data}/>} />
      </Switch>
    );
  }
}
