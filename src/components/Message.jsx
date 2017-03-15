import React, {Component} from 'react';

class Message extends Component {
  render() {

    console.log("Rendering <Message/>");
    return (
      <div>
        <h4> {this.props.results.id}</h4>
        <h4> {this.props.results.text}</h4>
        <p>{this.props.results.created_at}</p>
        <hr></hr>
      </div>
    );
  }
}

export default Message;

