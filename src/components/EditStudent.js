import React, { Component } from "react";

export default class EditStudent extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center" style={{ margin: 40 }}>
          <h2>Add a New Student</h2>
        </div>

        <form action="" style={{ margin: 16 }}>
          <div className="form-group row">
            <div className="col-3">
              <label className="col-form-label">
                <b> Name </b>
              </label>
            </div>

            <div className="col-8">
              <input className="form-control" type="email" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-3">
              <label className="col-form-label">
                <b> Admin No </b>
              </label>
            </div>
            <div className="col-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-3">
              <label className="col-form-label">
                <b> Level </b>
              </label>
            </div>
            <div className="col-8">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Edit"
              className="btn btn-primary btn-success"
            />
          </div>
        </form>
      </div>
    );
  }
}
