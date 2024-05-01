import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <div className="container my-3" style={{ textAlign: "center" }}>
          <h1>About TextUtils</h1>
          <div>2024</div>
        </div>
        <div
          className="container"
          style={{ maxWidth: "50%", textAlign: "center" }}
        >
          Welcome to <b>TextUtils</b> – your ultimate destination for all things
          text manipulation! At TextUtils, we understand the power of words and
          the significance of effective communication. Whether you're a seasoned
          writer, a student tackling assignments, a developer working with
          strings, or simply someone looking to refine their text, TextUtils is
          here to streamline your process and elevate your results. With a suite
          of intuitive tools and an array of functionalities, TextUtils empowers
          users to manipulate text effortlessly. Need to rephrase a sentence for
          clarity? No problem. Looking to convert text to different formats?
          We've got you covered. Want to generate lorem ipsum text for your
          design project? We can help with that too. At TextUtils, we prioritize
          simplicity, efficiency, and versatility. Our user-friendly interface
          ensures that text manipulation tasks are a breeze, regardless of your
          level of expertise. Whether you're performing basic operations like
          trimming whitespace or delving into more advanced techniques like
          regex pattern matching, TextUtils provides the tools you need to get
          the job done efficiently and effectively. Join the thousands of users
          who rely on TextUtils to enhance their text manipulation workflows.
          Whether you're a professional, a student, or an enthusiast, TextUtils
          is your go-to resource for all your text manipulation needs. Explore
          our suite of tools today and unlock the full potential of your text!
        </div>
        <div className="container my-3 " style={{ textAlign: "center" }}>
          <i class="bi bi-three-dots"></i>
        </div>
        <div className="container my-3" style={{ textAlign: "center" }}>
          Built by Rishi Raj
        </div>
      </div>
    </>
  );
}
