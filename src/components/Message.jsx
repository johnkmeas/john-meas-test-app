import React, {Component} from 'react';
import SingleMessage from './SingleMessage.jsx'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    return (
      <div>
        <Route exact={true} path="/" render={() => (
          <div>
            <h4> {this.props.results.text}</h4>
            <p>{this.props.results.created_at}</p>
            <Link to={`/g/${this.props.results.id}`}>
            <h4> {this.props.results.id}</h4>
            </Link>
            <hr></hr>
          </div>
        )} />

        <Route path="/g/:msgid" component={SingleMessage}/>
      </div>
    );
  }
}


export default Message;

