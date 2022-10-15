import './index.css'

const LatestMatch = props => {
  const {latestmatchdetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestmatchdetails

  return (
    <div className="latest-match-bg-container">
      <div className="team-details">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="match-details-container">
        <p className="details1">First Innings</p>
        <p className="details">{firstInnings}</p>
        <p className="details1">Second Innings</p>
        <p className="details">{secondInnings}</p>
        <p className="details2">Man Of The Match</p>
        <p className="details">{manOfTheMatch}</p>
        <p className="details">Umpires</p>
        <p className="details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
