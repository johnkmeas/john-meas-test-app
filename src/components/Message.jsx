import React, {Component} from 'react';
import Moment from 'react-moment';
import SingleMessage from './SingleMessage.jsx'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Message extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {

    fetch(`https://john-meas-test.herokuapp.com/messages/${this.props.results.id}/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      mode: 'cors'
    })
    console.log('event',event )
    event.preventDefault();

  }

  render() {
    console.log("Rendering <Message/>");
    return (
      <div>
        <h4> {this.props.results.text}</h4>
        <p>created on: <Moment>{this.props.results.created_at}</Moment></p>
        <Link to={`/messages/${this.props.results.id}`}>
          <h5> see more</h5>
        </Link>
        <button onClick={this.handleDelete}>Delete</button>
        <hr></hr>
      </div>
    );
  }
}


export default Message;

