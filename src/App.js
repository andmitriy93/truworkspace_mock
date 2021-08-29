import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Departments from './components/departments'
import Projects from './components/projects'
import DepartmentDetails from './components/departmentDetails'
import Teams from './components/teams'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Departments} />
        <Route path="/projects/:id" component={Projects} />
        <Route exact path="/departments/:id" component={DepartmentDetails} />
        <Route path="/teams/:id" component={Teams} />
      </Switch>

    </Router>
  );
}

export default App;
