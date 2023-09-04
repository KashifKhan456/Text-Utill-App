import { useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Faq from './Components/Faq';
import Alert from './Components/Alert';

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
    }
  return (
    <div>
      <Navbar mode={mode} toggleTheme={toggleTheme} toggleText={toggleText}/>
      <Alert alert={alert}/>
      <Home mode={mode}/>
      <About mode={mode} heading='About Us'/>
      <Faq heading ='Frequently Asked Question' mode={mode}/>
    </div>
  );
}

export default App;
