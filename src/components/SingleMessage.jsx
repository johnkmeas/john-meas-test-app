import React, {Component} from 'react';
import Moment from 'react-moment';

class SingleMessage extends React.Component {
  constructor() {
    super();
    this.state = {item: []}
  }
  componentWillMount() {
    fetch(`https://john-meas-test.herokuapp.com/messages/${this.props.match.params.id}/`)
    .then(function(response) {
       return response.json();
    })
    .then( (item) => {
      this.setState({item: this.state.item.concat(item)})
    })
  }

  render() {
    console.log('this.state', this.state.item)
    const items = this.state.item;

    return (
        <div>
          {items.map((item,i) =>
            <div key={i}>
            <p>{item.author}</p>
             <p> {item.text}</p>
            </div>
          )}


        </div>

    )
  }
}




export default SingleMessage