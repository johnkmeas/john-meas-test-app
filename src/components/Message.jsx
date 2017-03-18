import React, {Component} from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

class Message extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {

    fetch(`https://john-meas-test.herokuapp.com/messages/${this.props.results.id}/`, {
      method: 'DELETE'
    })
    console.log('event',event )

  }

  render() {
    console.log("Rendering <Message/>");
    return (
      <div>
        <div className="message">
          <h4> {this.props.results.text}</h4>
          <p>Posted <Moment fromNow>{this.props.results.created_at}</Moment></p>
          <Link to={`/messages/${this.props.results.id}`}>
            <h5> see more</h5>
          </Link>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}


export default Message;

