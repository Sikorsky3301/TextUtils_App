import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { BrowserRouter, Routes ,Route } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState("light");
  const showAlert = (message , type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // ADvertisement or Announcement Section
  setInterval(() => {
    document.title = "Text Manipulator"
  }, 1000);

  setInterval(() => {
    document.title = "TextUtils-Home"
  }, 1500);

  // Dark Mode
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2a1736";
      showAlert("Dark Mode Enabled " , "success");

    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled " , "success");

    }
  };

  return ( 
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className="container my-8">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
            {/* <Route exact path="/" element={ */}
            <Textform showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />
            {/* } /> */}
          {/* </Routes>  */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;
