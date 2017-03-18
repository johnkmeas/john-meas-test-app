import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PostMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showResults: false
    };
    this.onClicker = this.onClicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onClicker() {
    this.state.showResults == false ? this.setState({ showResults: true }) : this.setState({ showResults: false });

  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://john-meas-test.herokuapp.com/messages/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.value
      })
    })
  }

  render() {
    let PostForm;
    if (this.state.showResults) {
      PostForm =  <form onSubmit={this.handleSubmit} >
                    <label>
                      Write a message
                    </label>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                  </form>;
    }
    return (
      <div>
        <button onClick={this.onClicker}>Post Message</button>
        <div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={this.state.showResults}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppearTimeout={500}>
            {PostForm}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default PostMessage;