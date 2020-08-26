import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* pages */
import Home         from './pages/Home';
import Services     from './pages/Services';
import About        from './pages/About';
import Resources    from './pages/Resources';
import Contact      from './pages/Contact';
import NotFound     from './pages/NotFound';
import SiteHeader   from './pages/SiteHeader';
import SiteFooter   from './pages/SiteFooter';
import SiteNavBar   from './SiteNavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <SiteNavBar />
        <SiteHeader />
        <Switch>
          <Route component={Home}       path="/" exact />
          <Route component={Services}   path="/services" />
          <Route component={About}      path="/about" />
          <Route component={Resources}  path="/resources" />
          <Route component={Contact}    path="/contact" />
          <Route component={NotFound} />
        </Switch>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
