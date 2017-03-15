import React from 'react';
// import ReactDOM from 'react-dom';


class PostMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
    fetch('https://john-meas-test.herokuapp.com/messages/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.value
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Write a message:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostMessage