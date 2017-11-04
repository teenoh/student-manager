import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StudentList from "./StudentList";
import NewStudent from "./NewStudent";
import EditStudent from "./EditStudent";
import axios from "axios";
import config from "../../config";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      message: ""
    };

    this.deleteStudent = this.deleteStudent.bind(this);
    this.getStudentList = this.getStudentList.bind(this);
  }

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList() {
    axios.get(`${config.serverUrl}/api/students/`).then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  deleteStudent(id) {
    axios
      .delete(`${config.serverUrl}/api/students/${id}`)
      .then(res => {
        this.setState({ message: res.data });
      })
      .then(() => this.getStudentList());
  }

  render() {
    return (
      <Switch>
        <Route exact path="/new" component={NewStudent} />
        <Route exact path="/edit/:student" component={EditStudent} />
        <Route
          exact
          path="/"
          render={() => (
            <StudentList />
          )}
        />
        <Route
          render={() => (
            <StudentList />
          )}
        />
      </Switch>
    );
  }
}
