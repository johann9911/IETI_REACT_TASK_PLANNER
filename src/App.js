import { TaskList } from "./components/TaskList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { Login } from "./components/Login";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/task/:taskId" exact>
          <TaskForm />
        </Route>
        <Route path="/tasks" exact>
          <TaskList />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
