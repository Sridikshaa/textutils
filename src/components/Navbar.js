import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const [bgColor,setBgColor] = useState("color: props.mode ==='dark'?'white':'#042743'")
  

  // const handleGreenClick = ()=>{
  //   let bg = document.body.style.backgroundColor = "green"
  //   setBgColor(bg);
  //   // props.showAlert("Theme changed to green","success")
  // }
  // const handleBrownClick = ()=>{
  //   let bg = document.body.style.backgroundColor = "Brown"
  //   setBgColor(bg);
  //   // props.showAlert("Theme changed to Brown","success")
  // }
  // const handleGreyClick = ()=>{
  //   let bg = document.body.style.backgroundColor = "grey"
  //   setBgColor(bg);
  //   // props.showAlert("Theme changed to grey","success")
  // }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
    {/* <div>
            <button className='theme-btn' onClick={handleGreenClick}><svg className="colors bg-green mx-1 my-2" ></svg></button>
            <button className='theme-btn'  onClick={handleBrownClick}><svg className="colors bg-brown mx-1 my-2" ></svg></button>
            <button className='theme-btn' onClick={handleGreyClick}><svg className="colors bg-grey mx-1 my-2"></svg></button>
        </div>  */}

<div className="d-flex">
  <div className='bg-primary rounded mx-2' onClick={() => props.toggleMode('primary')} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-danger rounded mx-2' onClick={() => props.toggleMode('danger')} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-success rounded mx-2' onClick={() => props.toggleMode('success')} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
  <div className='bg-warning rounded mx-2' onClick={() => props.toggleMode('warning')} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
</div>


        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>  
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    aboutText:PropTypes.string}

Navbar.defaultProps={
    title:"Set title here",
    aboutText:"About"
}