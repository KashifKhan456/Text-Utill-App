import { useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Faq from './Components/Faq';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light');
  const [toggleText, setToggleText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  // Toggle Theme 
  const toggleTheme=()=>{
    if(mode==='dark'){
      setMode("light");
      setToggleText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }else{
        setMode("dark")
        setToggleText("Enable Light Mode")
        document.body.style.backgroundColor = 'rgb(1, 11, 29)';
        showAlert("Dark Mode has been enabled", "success");
      }
    }
    const showAlert = (message, type)=>{
      setAlert({msg:message, type:type})
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  return (
    <BrowserRouter>
    <div>
      <Navbar mode={mode} toggleTheme={toggleTheme} toggleText={toggleText}/>
      <Alert alert={alert}/>
      <Routes >
      <Route path='/' element={<Home mode={mode} showAlert={showAlert}/>}></Route>
      <Route path='/About' element={<About mode={mode} heading='About Us'/>}></Route>
      <Route path='/Faq' element={<Faq heading ='Frequently Asked Question' mode={mode}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
