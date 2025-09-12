import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import Registration from './pages/registration';
import Home from './pages/home';
// import Contact from './pages/Contact';

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
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;
