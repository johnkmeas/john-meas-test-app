import React, { Component } from 'react';
import MessageList from './components/MessageList';
import SingleMessage from './components/SingleMessage.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <Route exact={true} path="/" render={() => (
            <MessageList />

            )} />
            <Route path="/messages/:id" component={SingleMessage}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
