import React, { Component } from "react";
import { Link } from "react-router-dom";

class StudentRow extends Component {
  render() {
    return (
      <tr>
        <th>
          <div className="text-center">
            <img
              className="rounded-circle"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt=""
              style={{ height: 50 }}
            />
          </div>
        </th>
        <th>{this.props.name}</th>
        <th>{this.props.level}</th>
        <th>{this.props.dept}</th>
        <th>
          <Link to='/edit/1'><button className="btn btn-sm btn-info">Update</button></Link>
          <button className="btn btn-sm btn-danger">Delete</button>
        </th>
      </tr>
    );
  }
}

const StudentList = props => {
  return (
    <div className="container">
      <div className="text-center" style={{margin: 40}}>
        <h4>List of Students</h4>
      </div>

      <Link className="text-center" to="/new">
        <button className="btn btn-md btn-success" style={{margin: 20}} >Add a Student</button>
      </Link>

      <table className="table table-hover table-bordered table-responsive">
        <thead className="thead-light">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Level</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, id) => <StudentRow key={id} {...item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
