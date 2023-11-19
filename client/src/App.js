
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Join } from './components/Join/Join';
import { Chat } from './components/Chat/Chat';
import { Home } from './components/Home/Home';
import { Team } from './components/Team/Team';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/join" exact component={Join} />
      <Route path="/team" exact component={Team} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
