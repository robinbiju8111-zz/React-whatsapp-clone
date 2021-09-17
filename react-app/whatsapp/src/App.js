import './App.css';
import Sidebar from './Sidebar';
import Chats from './Chats';


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar></Sidebar>
        <Chats />
      </div>
    </div>
  );
}

export default App;
