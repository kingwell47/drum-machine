import "./App.scss";
import Display from "./Components/Display";

function App() {
  return (
    <div id='drum-machine' className='drum-machine'>
      <h1>8-Bit Sound Machine</h1>
      <Display />
      <a href='https://freesound.org/people/LittleRobotSoundFactory/packs/16681/'>
        Sounds by LittleRobotSoundFactory
      </a>
      <a href='https://www.kingwell47.com'>Coded by Kingwell47</a>
    </div>
  );
}

export default App;
