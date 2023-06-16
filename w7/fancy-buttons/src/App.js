import { useState } from "react";
import './App.css';
import AngryButton from './Components/AngryButton'
import CounterButton from './Components/CounterButton'
import LightSwitchButton from './Components/LightSwitchButton'
import TextRepeaterButton from './Components/TextRepeaterButton'

function App() {

  const switchLight = () => setLight(light === "on" ? "off" : "on");
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  return (
    <div className={`App ${dark}`}>
    <h1>Fancy Buttons!</h1>
    <section>
      <AngryButton />
      <CounterButton />
      <LightSwitchButton switchLight={switchLight} light={light} setLight={setLight} />
      <TextRepeaterButton />
    </section>
    </div>
  );
}

export default App;
