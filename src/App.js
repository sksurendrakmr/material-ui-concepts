import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/ui/Footer'
import LandingPage from './components/ui/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/services' exact component={() => <div>Services</div>} />
          <Route
            path='/customsoftware'
            exact
            component={() => <div>Custom Software</div>}
          />
          <Route
            path='/mobileapps'
            exact
            component={() => <div>Mobile Apps</div>}
          />
          <Route path='/websites' exact component={() => <div>Websites</div>} />
          <Route
            path='/revolution'
            exact
            component={() => <div>Revolution</div>}
          />
          <Route path='/about' exact component={() => <div>About us</div>} />
          <Route
            path='/contact'
            exact
            component={() => <div>Contact us</div>}
          />
          <Route path='/estimate' exact component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
