import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Departments from './components/departments'
import Projects from './components/projects'
import DepartmentDetails from './components/departmentDetails'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Departments />
        </Route>
        <Route path="/projects/:id">
          <Projects />
        </Route>
        <Route path="/department/:id">
          <DepartmentDetails />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
