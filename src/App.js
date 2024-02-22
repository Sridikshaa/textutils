import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from './components/About';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //   const removeBodyClasses = ()=>{
  //   document.body.classList.add('bg-light')
  //   document.body.classList.add('bg-dark')
  //   document.body.classList.add('bg-danger')
  //   document.body.classList.add('bg-success')
  //   document.body.classList.add('bg-warning')
  //   document.body.classList.add('bg-primary')
  // }

  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls);
  //   document.body.classList.add('bg-'+cls)
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled", "success");
  //     // document.title = "TextUtils - Dark mode";
  //     // setInterval(() => {
  //     //   document.title = "TextUtils is amazing";
  //     // }, 2000);
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     // document.title = "TextUtils - Light mode";
  //     // setInterval(() => {
  //     //   document.title = "Install TextUtils Now";
  //     // }, 1500);
  //   }
  // };

  const toggleMode = (cls) => {
    // Remove any existing background color classes from body
    document.body.classList.remove('bg-light', 'bg-dark', 'bg-danger', 'bg-success', 'bg-warning', 'bg-primary');
    
    // Add background color class based on cls
    document.body.classList.add('bg-' + cls);
  
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  

  return (
    <>
    <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}/>}  />
          </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
