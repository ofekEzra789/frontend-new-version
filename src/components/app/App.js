import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VolunteerRegister from '../volunteerRegister/volunteerRegister';
import NavBar from '../navbar/navBar';
import './App.scss';


function App() {
  return (
    <div className="appContainer">
      <Router>
        <NavBar />
        <div className="main">
          <Switch>
            <Route path="/volunteerRegister">
              <VolunteerRegister />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
