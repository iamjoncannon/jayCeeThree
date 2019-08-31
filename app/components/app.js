import React from 'react';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Technologies from './Tech'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/tech" component={Technologies} />
          { /* 
          <Route path="/projects" component={ProjectLanding} />
          */}
        </Switch> 
    </div>
  );
};

export default App;