import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const HomePage = () => (<div>HomePage</div>)

const AboutPage = () => (<div>AboutPage</div>)

const ContactPage = () => (<div>Contact</div>)

const NotFoundPage = () => (<div>404</div>)



export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)