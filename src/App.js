import {BrowserRouter, Switch, exact, Route} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="responsive-container">
        <div className="app-body">
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default App
