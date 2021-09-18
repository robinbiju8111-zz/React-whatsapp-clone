import './App.css';
import Sidebar from './Sidebar';
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chats />
            </Route>
            <Route path="/">
              <Chats />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
