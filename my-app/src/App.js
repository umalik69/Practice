import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
    <Routes>
      <Route path="/RegisterForm" element={< RegisterForm/>}> </Route>    
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
