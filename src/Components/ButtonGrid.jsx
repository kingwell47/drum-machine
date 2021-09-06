import React from "react";
import Button from "./Button";
import soundList from "../audio";

const soundsArray = [
  {
    id: "Q",
    src: soundList[1],
    desc: "Collect Point 00",
  },
  {
    id: "W",
    src: soundList[2],
    desc: "Explosion 01",
  },
  {
    id: "E",
    src: soundList[3],
    desc: "Jump 01",
  },
  {
    id: "A",
    src: soundList[4],
    desc: "Hit 01",
  },
  {
    id: "S",
    src: soundList[5],
    desc: "Shoot 02",
  },
  {
    id: "D",
    src: soundList[6],
    desc: "Pickup 00",
  },
  {
    id: "Z",
    src: soundList[7],
    desc: "Pickup 01",
  },
  {
    id: "X",
    src: soundList[8],
    desc: "Pickup 04",
  },
  {
    id: "C",
    src: soundList[9],
    desc: "Pickup 03",
  },
];

function ButtonGrid(props) {
  return (
    <section className='button-grid'>
      {soundsArray.map((item) => (
        <Button
          key={item.id}
          id={item.id}
          src={item.src}
          desc={item.desc}
          handler={props.handler}
        />
      ))}
    </section>
  );
}

export default ButtonGrid;
