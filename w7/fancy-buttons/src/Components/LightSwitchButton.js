

function LightSwitchButton(props){


  const {light, setLight} = props;
  return (
    <button onClick={props.switchLight} className="LightSwitchButton">
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;