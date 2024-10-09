import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

document.body.style.backgroundColor='#0d1117';
//remover above line if state used light
function App() { 

  const [darkM, setDarkM]= useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert("null");
    }, 1200);
  }

  const toogleMode=()=>{
    if(darkM==='light'){
      setDarkM('dark')
      document.body.style.backgroundColor='#0d1117';
    }
  else{
    setDarkM('light')
    document.body.style.backgroundColor='white';
  }
  }

  return (
  <>
  <Router>
  <NavBar title="Qube  Text" HomeTitle="About" darkM={darkM} toogleMode={toogleMode}/>
  <br></br>
  
  <Alert alert={alert}  />
  
  <Routes>

    <Route path="/" element={
      <>
      <div className='Container my-3'>
        <TextForm showAlert={showAlert} heading="Qube Text - Case Convert / Trim Spaces / words & Char Count"darkM={darkM}/>
       </div>
      </>
    }>
    </Route>

    <Route path="/about" element={<About darkM={darkM} />} />
    
    <Route path="/contact" element={<Contact darkM={darkM} />} />
    

  </Routes>
  
  <footer>
  <Footer darkM={darkM}  companyName=" QubeKnit | Muhammad Alishan"  />
  </footer>
  
  </Router>
  </>
  );
} 

export default App;
