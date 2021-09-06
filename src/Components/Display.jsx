import React, { useState } from "react";
import ButtonGrid from "./ButtonGrid";

function Display(props) {
  const [desc, setDesc] = useState("");

  const updateDesc = (newDesc) => setDesc(newDesc);

  return (
    <>
      <div className='display'>
        <p>{desc}</p>
      </div>
      <ButtonGrid handler={updateDesc} />
      <a href='https://freesound.org/people/LittleRobotSoundFactory/packs/16681/'>
        Sounds by LittleRobotSoundFactory
      </a>
    </>
  );
}

export default Display;
