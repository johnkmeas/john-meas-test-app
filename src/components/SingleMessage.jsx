import React, {Component} from 'react';
import Message from './Message.jsx';
class SingleMessage extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentWillMount() {

    fetch(`https://john-meas-test.herokuapp.com/messages/${this.props.match.params.msgid}`)
    .then( (response) => {
      let myData = response.json()
      this.setState({myData})
    })
  }

  render() {
    console.log('this.state', this.state)
  let items = this.state;

    return (
        <div>
          { items.forEach((item, i) =>

            <Message key={i} results={item}/>) }
        </div>

    )
  }
}



export default SingleMessage