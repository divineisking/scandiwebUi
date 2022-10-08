import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'


function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={ <Home/>}/>
        <Route  path="product" element={ <AddProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
