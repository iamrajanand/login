import './App.css';
import Login from './login/Login';
import L1 from './login/L1';
import Weekend from './login/Weekend/Weekend';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  <Router>
   <Routes>
     <Route exact path="/" element={<Login/>}></Route>
     <Route exact path="/L1" element={<L1/>}></Route>
     <Route exact path="/Weekend/weekend" element={<Weekend/>}></Route>
    

   </Routes>
  </Router>
  );
}

export default App;
