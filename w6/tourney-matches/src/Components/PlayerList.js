import Player from "./Player"



function PlayerList(props) {
  const parsedPlayers = props.parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  )
}

export default PlayerList