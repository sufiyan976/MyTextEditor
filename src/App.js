import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Errorpage from './components/Errorpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import RootLayout from './routes/RootLayout';



import React from 'react'

// import { Outlet } from 'react-router-dom'
import Alert from './components/Alert';




function App() {

 

  const [style, setstyle] = useState({
    color : 'black',
    backgroundColor : "white"
  })

const [mode, setmode] = useState("light")
const [button, setbutton] = useState("Enable Dark Mode")
const [bg, setbg] = useState('light')
const [aboutbg, setaboutbg] = useState("light")
const [alert, setalert] = useState({
  message : '',
  message1 : '',
  value : null
})
const [textareabg, settextareabg] = useState({
  backgroundColor : 'white',
  color : 'black'
})

const togglemode = ()=>{
if(style.color==='black' ){
setstyle({
  color : 'white',
  backgroundColor : "#01234f"

})
setmode('dark')
setbutton('Disable Dark Mode')

setbg(document.body.style.backgroundColor = '#0a1d36',document.body.style.color = 'white')
setaboutbg('secondary')
setalert({
  message : 'Dark Mode Enabled',
  message1: 'Success : ',
  value : "success"
  
})
setTimeout(() => {
  setalert({
    message : '',
    message1 : '',
    value : ''
    
  })
},1500);
settextareabg({
  backgroundColor : '#dce7f5',
  color : 'black'
})




}
else{
setstyle({
  color : 'black',
  backgroundColor : "white"
})
setmode('light')
setbutton('Enable Dark Mode')

setbg(document.body.style.backgroundColor = 'white',document.body.style.color = 'black')
setaboutbg('light')
setalert({
  message : ' Light Mode Enabled',
  message1: 'Success : ',
  value : "success"
  
})
setTimeout(() => {
  setalert({
    message : '',
    message1 : '',
    value : ''
    
  })
},1500);
settextareabg({
  backgroundColor : 'white',
  color : 'black'
})
}      
}

const [style1, setstyle1] = useState({
color : 'black',
backgroundColor : "f8f9fa"
})
const togglemode2 =()=>{
if(style1.color === 'black'){
   setstyle1({
    color : 'white',
    backgroundColor : "black"

})
document.body.style.backgroundColor = 'black'
}
else{
    setstyle1({
        color : 'black',
        backgroundColor : "white"
    })
    document.body.style.backgroundColor = 'white'
}

}
function showalert(message , value) {
  setalert({
    msg : message,
    vle : value
  })

  }


const router = createBrowserRouter([
  { 
    path : '/',
    element :<><Navbar  title='MY-TEXT-EDITOR' home='Home' about='About' style={style} mode={mode} togglemode={togglemode} togglemode2={togglemode2} button={button} bg={bg}/><Alert alert={alert} showalert={showalert}/><Textform alert={setalert} textarea={textareabg}/><Footer style={style}/></> ,
    errorElement : <Errorpage/>,
    
    
  },
  {
    path : '/home',
    element : <><Navbar  title='MY-TEXT-EDITOR' home='Home' about='About' style={style} mode={mode} togglemode={togglemode} togglemode2={togglemode2} button={button} bg={bg}/> <Home/> <Footer style={style}/> </>
  },
  {
    path : '/about',
    element :<><Navbar  title='MY-TEXT-EDITOR' home='Home' about='About' style={style} mode={mode} togglemode={togglemode} togglemode2={togglemode2} button={button} bg={bg}/> <About  aboutbg={aboutbg} style={style} /> <Footer style={style}/> </>
  }

])

  return (
    
    <RouterProvider router={router}/>
 
    
    

  );
}

export default App;
