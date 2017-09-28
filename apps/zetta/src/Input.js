import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    onEnter: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };

  handleChange = e => this.setState({ text: e.target.value });

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onEnter(this.state.text);
    }
  };

  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
    )
  }
}

export default Input;