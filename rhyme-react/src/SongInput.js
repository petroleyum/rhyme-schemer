import React, { Component } from 'react';

class SongInput extends Component {

  handleChange = (e) => {
    this.props.handleInput(e.target.value);
  }

  render() {
    return (
      <div className="SongInput">
      <h1>Song Input</h1>
      <textarea onChange={this.handleChange} defaultValue={this.props.text}></textarea>

      </div>
    );
  }
}

export default SongInput;
