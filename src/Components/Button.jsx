import React, { useEffect } from "react";

function Button(props) {
  const handlePressed = (event) => {
    if (event.key === props.id.toLowerCase()) {
      handleClick();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handlePressed);
  });

  const handleClick = () => {
    playAudio();
    props.handler(props.desc);
  };

  const playAudio = () => {
    let audio = document.getElementById(props.id);
    audio.play();
  };

  return (
    <div className='button' onClick={handleClick}>
      <audio className='clip' id={props.id} src={props.src}></audio>
      {props.id}
    </div>
  );
}

export default Button;
