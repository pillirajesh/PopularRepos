import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    repositoryList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getFailureRespositoryRequest = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="fail"
      />
      <h1 className="fail-message">Something Went Wrong</h1>
    </>
  )

  getDetails = async () => {
    const {activeTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTab}`

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.popular_repos.map(eachData => ({
        avatarUrl: eachData.avatar_url,
        forksCount: eachData.forks_count,
        issuesCount: eachData.issues_count,
        starsCount: eachData.stars_count,
        id: eachData.id,
        name: eachData.name,
      }))
      this.setState({repositoryList: updatedData, isLoading: false})
    } else {
      this.getFailureRespositoryRequest()
    }
  }

  selectCurrentTab = id => {
    this.setState({activeTab: id}, this.getDetails)
  }

  render() {
    const {activeTab, isLoading, repositoryList} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="unordered-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguageDetails={eachLanguage}
              key={eachLanguage.id}
              selectCurrentTab={this.selectCurrentTab}
              isActive={eachLanguage.id === activeTab}
            />
          ))}
        </ul>
        {isLoading ? (
          <div className="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="unordered-list1">
            {repositoryList.map(eachRepository => (
              <RepositoryItem
                eachRepositoryDetails={eachRepository}
                key={eachRepository.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
