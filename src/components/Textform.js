import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const BaseEncoder = () => {
    settext(btoa(text));
  };

  const BaseDecoder = () => {
    try {
      settext(atob(text));
    } catch (err) {
      props.showAlert("Cannot Decode Further More" , "Warning");
    }
  };

  const uphandler = () => {
    settext(text.toUpperCase());
  };

  const lowhandler = () => {
    settext(text.toLowerCase());
  };

  const onchange = (event) => {
    settext(event.target.value);
  };

  const copyhandler = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, settext] = useState("");
  const str = "";
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={uphandler}
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onClick={lowhandler}
        >
          {" "}
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-3 btn btn-success "
          onClick={BaseEncoder}
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          BASE64
        </button>
        <button
          className="btn btn-primary mx-2 my-3 btn btn-success"
          onClick={BaseDecoder}
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          DecodeBase64
        </button>
        <button
          className="btn btn-primary mx-2 my-3 btn btn-success"
          onClick={copyhandler}
          style={{
            backgroundColor: props.mode === "dark" ? "#2a1736" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          CopyText
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> Your Text Summary </h1>
        <p>
          {text === str ? 0 : text.split(" ").length} Words and {text.length}{" "}
          Characters
        </p>
      </div>
      <div
        className="container my-3 text-wrap"
        style={{
          maxWidth: "50%",
          wordWrap: "break-word",
          textAlign: "center",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4> Preview </h4>
        <p>{text.length > 0 ? text : "Enter Something to Manipulate"}</p>
      </div>
    </>
  );
}

Textform.propTypes = { heading: PropTypes.string };
