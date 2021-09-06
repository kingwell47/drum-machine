import React, { useState, useEffect } from "react";

function Button(props) {
  const [active, setActive] = useState(false);

  const handlePressed = (event) => {
    let keyed = event.key.toLowerCase();
    if (keyed === props.id.toLowerCase()) {
      handleClick();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handlePressed);
  });

  const handleClick = () => {
    setActive(true);
    playAudio();
    props.handler(props.desc);
    setTimeout(() => {
      setActive(false);
    }, 100);
  };

  const playAudio = () => {
    let audio = document.getElementById(props.id);
    audio.play();
  };

  return (
    <div
      className={active ? "drum-pad active" : "drum-pad"}
      id={props.btnId}
      onClick={handleClick}>
      <audio className='clip' id={props.id} src={props.src}></audio>
      {props.id}
    </div>
  );
}

export default Button;
