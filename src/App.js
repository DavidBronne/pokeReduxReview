import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Post from './component/Post'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/:post_id' component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App;
