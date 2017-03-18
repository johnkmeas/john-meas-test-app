import React from 'react';
import Message from './Message.jsx';
import PostMessage from './PostMessage.jsx';

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }

  componentWillMount() {
    //TODO These fetches would need some logic for when there are multiple pages
    //...for now it manages to fetch a second page
    fetch('https://john-meas-test.herokuapp.com/messages/?format=json')
    .then( response => response.json() )
    .then( ({results: items}) => this.setState({items}))
    fetch('https://john-meas-test.herokuapp.com/messages/?format=json&page=2')
    .then( response => response.json() )
    .then( ({results: items}) => this.setState({items: this.state.items.concat(items)}))
  }

  render() {
    let items = this.state.items;
    return (
      <div>
        <div className="message-list">
          <PostMessage />
          { items.map((item, i) => <Message key={i} results={item}/>) }
        </div>
      </div>
    )
  }
}

export default MessageList