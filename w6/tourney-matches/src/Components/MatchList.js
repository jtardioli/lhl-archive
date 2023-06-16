import Match from "./Match"


function MatchList(props) {
  const parsedMatches = props.matchData.map(match => <Match key={match.matchNumber} {...match} />);
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  )
}

export default MatchList