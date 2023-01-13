import logo from './logo.svg';
import './App.css';
import HospitalView from './Pages/HospitalView';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginAdmin from './Pages/LoginAdmin';
import { Routes,Route ,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      
      <Routes >
     <Route exact path="/" element={<LoginAdmin/>}></Route>
     <Route exact path="/provider" element={<HospitalView/>}></Route>
   </Routes>
      
    </div>
  
    </BrowserRouter>
  );
}

export default App;
