import React from 'react';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe'
import Technologies from './Technology/Tech'
import Projects from './Projects/Projects'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/tech" component={Technologies} />
          
          <Route path="/projects" component={Projects} />
          
        </Switch> 
    </div>
  );
};

export default App;