import React, {Component} from 'react';
import SingleMessage from './SingleMessage.jsx'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Message extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {

    event.preventDefault();
    fetch(`https://john-meas-test.herokuapp.com/messages/${this.props.results.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'DELETE'
      },
      method: 'DELETE',
      mode: 'cors'
    })

  }

  render() {
    console.log("Rendering <Message/>");
    return (
      <div>
        <Route exact={true} path="/" render={() => (
          <div>
            <h4> {this.props.results.text}</h4>
            <p>created on: {this.props.results.created_at}</p>
            <Link to={`/g/${this.props.results.id}`}>
              <h5> see more</h5>
            </Link>
            <form onSubmit={this.handleDelete}>
              <input type="submit" value="delete" />
            </form>
            <hr></hr>
          </div>
        )} />

        <Route path="/g/:msgid" component={SingleMessage}/>
      </div>
    );
  }
}


export default Message;

