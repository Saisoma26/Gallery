import './index.css'

const MatchCard = props => {
  const {matchdetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchdetails

  const matchstatus = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-details-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchstatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
