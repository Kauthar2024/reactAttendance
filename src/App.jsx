import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import './App.css'
import Login from './pages/login';
import Registration from './pages/registration';
import Home from './pages/home';
import About from './pages/About';

function App() {
    // const[count, setCount] = useState(10);
    // console.log("the updated count is", count);
    // const handleBtnInc =()=>{
    //     setCount(count+1);
    //     // setCount(prevCount=> prevCount+1);
    // }
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
       {/* <div className="count" style={{marginLeft:"150px"}}>
          <h1>Count: {count}</h1>
          <button onClick={()=>handleBtnInc()} >Increment</button>
      </div> */}
    </>
  )
}

export default App;
