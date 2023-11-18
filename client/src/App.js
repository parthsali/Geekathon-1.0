
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Join } from './components/Join/Join';
import { Chat } from './components/Chat/Chat';
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/home" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
