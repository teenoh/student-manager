import React, {Component} from 'react'


export default class FormField extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      event = e.target.value;
      this.props.fieldChange(e);
    }
  
    render() {
      const { name, type, label, grid_style} = this.props.field;
      return (
        <div className="form-group row">
          <div className="col-3">
            <label className="col-form-label">
              <b>{label}</b>
            </label>
          </div>
  
          <div className={grid_style || 'col-6'}>
            <input
              className="form-control"
              name={name}
              type={type}
              onChange={this.handleChange}
              value={this.props.value}
            />
          </div>
        </div>
      );
    }
  }
  