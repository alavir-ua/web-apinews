import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import TrendingScreen from './screens/TrendingScreen'
import SourcesScreen from './screens/SourcesScreen'
import AboutScreen from './screens/AboutScreen'
import NotFoundScreen from './screens/NotFoundScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/home/search/:keyword" component={HomeScreen} exact />
            <Route path="/home/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/home/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/" component={HomeScreen} exact />
            <Route
              path="/trending/page/:pageNumber"
              component={TrendingScreen}
              exact
            />
            <Route path="/trending" component={TrendingScreen} exact />
            <Route
              path="/sources/page/:pageNumber"
              component={SourcesScreen}
              exact
            />
            <Route path="/sources" component={SourcesScreen} exact />
            <Route path="/about" component={AboutScreen} exact />
            <Route component={NotFoundScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
