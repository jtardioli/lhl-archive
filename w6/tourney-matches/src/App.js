import './App.css';
import PlayerList from './Components/PlayerList'
import MatchList from './Components/MatchList'
import matchData from "./data/matchData"
import playerData from './data/playerData'
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';


function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);


  return (
    <div className="App">
      <h1>
      Tourney Matches{" "}
      <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData}  />
</div>
  )
}

export default App;
