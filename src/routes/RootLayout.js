import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function RootLayout() {

    const [style, setstyle] = useState({
        color : 'black',
        backgroundColor : "white"
      })
    
const [mode, setmode] = useState("light")
const [button, setbutton] = useState("Dark Mode")
const [bg, setbg] = useState('light')
const [aboutbg, setaboutbg] = useState("light")

const togglemode = ()=>{
  if(style.color==='black' ){
    setstyle({
      color : 'white',
      backgroundColor : "black"

    })
    setmode('dark')
    setbutton('Light Mode')
    
    setbg(document.body.style.backgroundColor = 'grey',document.body.style.color = 'white')
    setaboutbg('dark')
    
    
    
    
  }
  else{
    setstyle({
      color : 'black',
      backgroundColor : "white"
    })
    setmode('light')
    setbutton('Dark Mode')
    
    setbg(document.body.style.backgroundColor = 'white',document.body.style.color = 'black')
    setaboutbg('light')
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

  return (
    <>
    <Navbar title='MY-TEXT-EDITOR' home='Home' about='About' style={style} mode={mode} togglemode={togglemode} togglemode2={togglemode2} button={button} bg={bg}/>
    <Outlet/>
    <Footer/>
    </>
  )
}
