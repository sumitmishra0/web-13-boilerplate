import './App.css';
import { Navbar } from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import  Home  from './components/Home';
import  About  from './components/About';
import  {MoviesDashboard}  from './components/MoviesDashboard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/movies"} eleent={<MoviesDashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;