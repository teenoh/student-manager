import React, { Component } from "react";
import Header from "./Header";
import StudentList from "./StudentList";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}
