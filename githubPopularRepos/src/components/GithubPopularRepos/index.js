import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activetabId: 'ALL', repositoryItemsList: [], isloading: true}

  componentDidMount() {
    this.fetchItemDetails()
  }

  fetchItemDetails = async () => {
    const {activetabId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activetabId}`
    const response = await fetch(url)
    const responseData = await response.json()
    const data = await responseData.popular_repos
    const updatedData = data.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({repositoryItemsList: updatedData, isloading: false})
  }

  updateActivetabsId = id => {
    this.setState({activetabId: id}, this.fetchItemDetails)
  }

  loadercomponent = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {repositoryItemsList, isloading} = this.state
    return (
      <div className="back">
        <h1 className="popular-heading">Popular</h1>
        <ul className="tabsList-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              itemDetails={each}
              key={each.id}
              onclickfunc={this.updateActivetabsId}
            />
          ))}
        </ul>
        {isloading ? (
          this.loadercomponent()
        ) : (
          <ul className="reposiroyItems-container">
            {repositoryItemsList.map(each => (
              <RepositoryItem itemDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
