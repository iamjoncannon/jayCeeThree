import React from 'react';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom'
// import Landing from './components/Landing'
// import Documentation from './components/Documentation'
import AboutMe from './AboutMe'
// import ProjectLanding from './components/Project/ProjectLanding'
// import Technology from './components/technologies/TechLanding'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          { /* 
          <Route path="/projects" component={ProjectLanding} />
          <Route path="/technology" component={Technology} />
          */}
        </Switch> 
    </div>
  );
};

export default App;