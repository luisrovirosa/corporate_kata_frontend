import React, { Component } from 'react';

class EmployeeSelector extends Component {
  render() {
    return (
      <select
        value={this.props.value}
        onChange={(event) => {
          this.props.onChange(event.currentTarget.value);
        }}
      >
        <option value="jose">Jose Cabrera</option>
        <option value="hugo">Hugo Chinchilla</option>
      </select>
    );
  }
}

export default EmployeeSelector;
