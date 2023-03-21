import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  const style ={
    textDecoration: 'none'
  }
  return (
    <div className='mt-auto' style={style}>
        <footer className="text-center  " style={{backgroundColor: props.style.color==='black'?'black':'#e9ecf0' ,color:props.style.color==='black'?'white':'black'}} >
  {/* <!-- Grid container --> */}
  <div className="container "></div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-1 bg-"  > 
    © 2023Copyright:
    <Link className=""style={{color:props.style.color==='black'?'white':'black',textDecoration: 'none'}} > mytexteditor.com All rights reserved.</Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}
