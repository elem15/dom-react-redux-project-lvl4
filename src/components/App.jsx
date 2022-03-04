import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.jsx';
import Login from './Login.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>         
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>   
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Home />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
    </Router>
  );
}
