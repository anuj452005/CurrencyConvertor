// n

import NavBar from './components/NavBar';
import TextFrom from './components/TextForm'
import About from './components/About';
import React ,{ useState } from 'react';




function App() {
  const [mode, setMode] = useState('dark');
  
  const toggle=()=>{
    if(mode=='dark')
    setMode('light');
  else setMode('dark')
  }
 
  return (
  
    <>
       <NavBar title="Anuj"  />
       <TextFrom  heading='Anuj workshop'/>
       anuj tiropathi 
       <About/>
    </>

  )
}

export default App
