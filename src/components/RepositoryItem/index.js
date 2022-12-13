// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepositoryDetails} = props
  const {
    avatarUrl,
    name,
    starsCount,
    forksCount,
    issuesCount,
  } = eachRepositoryDetails

  return (
    <li className="list-container1">
      <div className="repository-container">
        <img src={avatarUrl} alt={name} className="image" />
        <h1 className="name">{name}</h1>
        <div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="img"
            />
            <p className="count">
              {starsCount} <span>stars</span>
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="img"
            />
            <p className="count">
              {forksCount} <span>forks</span>
            </p>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="img"
            />
            <p className="count">
              {issuesCount} <span>open issues</span>
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
