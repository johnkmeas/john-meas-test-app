import React from 'react';
// import ReactDOM from 'react-dom';
import Message from './Message.jsx';
import PostMessage from './PostMessage.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }
  componentWillMount() {
    fetch('https://john-meas-test.herokuapp.com/messages/?format=json')
    .then( response => response.json() )
    .then( ({results: items}) => this.setState({items}))
  }
  render() {
    let items = this.state.items;

    return (
      <Router>
        <div>
        <PostMessage />
          { items.map((item, i) =>

            <Message key={i} results={item}/>) }
        </div>
      </Router>
    )
  }
}



export default MessageList