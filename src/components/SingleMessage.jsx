import React, {Component} from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
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
        <div className="message-single">
          {items.map((item,i) =>
            <div key={i}>
            <p>By {item.author}</p>
            <p>Posted <Moment fromNow>{item.created_at}</Moment></p>
             <p> {item.text}</p>
            </div>
          )}
          <Link to={`/`}>
            <h5>Back to Main</h5>
          </Link>


        </div>

    )
  }
}




export default SingleMessage;