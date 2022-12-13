// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageDetails, selectCurrentTab, isActive} = props
  const {id, language} = eachLanguageDetails
  console.log(isActive)

  const selectLanguageTab = () => {
    selectCurrentTab(id)
  }

  return (
    <li className="list-container">
      {isActive && (
        <button className="button1" type="button" onClick={selectLanguageTab}>
          {language}
        </button>
      )}
      {!isActive && (
        <button className="button" type="button" onClick={selectLanguageTab}>
          {language}
        </button>
      )}
    </li>
  )
}

export default LanguageFilterItem
