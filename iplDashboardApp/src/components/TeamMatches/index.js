import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isloading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    matchId: '',
  }

  componentDidMount() {
    this.fetchEachTeamDetails()
  }

  fetchEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updateData

    const updatedteamBannerUrl = teamBannerUrl

    const updatedmatchdetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: updatedteamBannerUrl,
      latestMatchDetails: updatedmatchdetails,
      recentMatches: updatedRecentMatches,
      isloading: false,
      matchId: id,
    })
  }

  render() {
    const {
      teamBannerUrl,
      recentMatches,
      latestMatchDetails,
      isloading,
      matchId,
    } = this.state

    console.log(matchId)

    return (
      <div>
        {isloading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={matchId}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <p className="latestmatches-heading">Latest Matches</p>
            <LatestMatch
              latestmatchdetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="recent-matches-list-container">
              {recentMatches.map(each => (
                <MatchCard matchdetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
