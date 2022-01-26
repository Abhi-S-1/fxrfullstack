import "./styles.css";
import banner from "./banner_medium.png";
import React, { useState, useEffect } from "react";
let email = "";

const { pages } = require("./data");
function PageDetails(props) {
  let name = props.match.params.id;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name == name) {
      email = pages[i].email;
    }
  }

  let [counter, setCounter] = useState(0);
  const [scripted, setscripted] = useState(false);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  function handleClick() {
    if (counter > 1) {
      clearTimeout(myTimeout);
    }
    counter = 11;
    function myGreeting() {
      setscripted(true);
    }

    const myTimeout = setTimeout(myGreeting, 11000);
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }
  function handleReset() {
    setscripted(false);
  }
  return (
    <div>
      <div className="main">
        <div className="firstHalf">
          <div className="firstName">{name}</div>
          <div>
            <img src={banner} className="banner" alt="banner photo" />
          </div>
        </div>
        <div className="secondHalf">
          <article class="art-content">
            <h2>{email}</h2>

            {scripted ? (
              <p>
                {" "}
                <mark class="red">*</mark>orem ipsum do
                <mark class="red">*</mark>or sit amet, consectetur adipiscing e
                <mark class="red">*</mark>it. Praesent risus justo, commodo ut
                risus sit amet
              </p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent risus justo, commodo ut risus sit amet
              </p>
            )}

            {scripted && counter < 1 && (
              <button className="btn" onClick={handleReset}>
                reset
              </button>
            )}
            {!scripted && (
              <button className="btn" onClick={handleClick}>
                Javascript!
              </button>
            )}
            <p>{counter > 0 && counter}</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
