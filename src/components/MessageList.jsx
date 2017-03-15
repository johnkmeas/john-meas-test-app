import React from 'react';
// import ReactDOM from 'react-dom';
import Message from './Message.jsx';

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
      <div>
        { items.map((item, i) =>

          <Message key={i} results={item}/>) }
      </div>
    )
  }
}



export default MessageList