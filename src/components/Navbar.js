import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div className=''  >    <nav className= "navbar navbar-expand-lg" style={props.style} data-bs-theme={props.mode}>
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand mx-3" to="/"><b>{props.title}</b></Link>
      
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link className="nav-link " aria-current="page" to="/home">{props.home}</Link>
          </li>
          <li className="nav-item d-sm-block d-none">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
      
        </ul>
        
      <div className="form-check form-switch mb-2 mb-lg-0">
  <input className="form-check-input" onClick={props.togglemode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.button}</label>
</div>

      </div>
      <ul className="navbar-nav pl-5 mb-lg-0 d-sm-none"  >
        
    <li className="nav-item">
            <Link className="nav-link" to="/about">About-Us</Link>
          </li></ul>
    </div>
  
  </nav>
  </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired ,
    home : PropTypes.string.isRequired ,
    about : PropTypes.string.isRequired 
}

Navbar.defaultProps = {
    title : 'title here',
    home : 'home here',
    about : 'about here'
}