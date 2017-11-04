import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import config from "../../config";
import FormField from './FormField'

class Modal extends Component {
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
      data: {}
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
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="modal fade" id={this.props._id}>
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.firstName} {this.props.lastName}</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="text-center">
                <img
                  className="rounded-circle"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  alt=""
                  style={{ height: 100 }}
                />
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
          

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.submitForm}
                    data-dismiss="modal"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
        <th>
          {this.props.firstName} {this.props.lastName}
        </th>
        <th>{this.props.level}</th>
        <th>{this.props.department}</th>
        <th>
          <button
            data-toggle="modal"
            data-target={`#${this.props._id}`}
            className="btn btn-sm btn-info"
          >
            Update
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.props.delete(this.props._id)}
          >
            Delete
          </button>
        </th>
        <Modal {...this.props}/>
      </tr>
    );
  }
}

StudentRow.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired
};

class StudentList extends Component {
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
        this.getStudentList();
        this.setState({ message: res.data });
      })
      .then(() => console.log(this.state.message));
  }

  render() {
    return (
      <div className="container">
        <div className="text-center" style={{ margin: 40 }}>
          <h4>List of Students</h4>
        </div>

        <Link className="text-center" to="/new">
          <button className="btn btn-md btn-success" style={{ margin: 20 }}>
            Add a Student
          </button>
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
            {this.state.data.map((item, id) => (
              <StudentRow
                key={item._id}
                {...item}
                delete={this.deleteStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
