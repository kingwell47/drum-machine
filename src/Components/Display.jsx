import React, { useState } from "react";
import ButtonGrid from "./ButtonGrid";

function Display(props) {
  const [desc, setDesc] = useState("");

  const updateDesc = (newDesc) => setDesc(newDesc);

  return (
    <>
      <div className='display' id='display'>
        <p>{desc}</p>
      </div>
      <ButtonGrid handler={updateDesc} />
    </>
  );
}

export default Display;
