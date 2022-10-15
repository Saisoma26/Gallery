import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="configuration-bg">
          <h1 className="configuration-heading">Layout</h1>
          <input type="checkbox" id="content" onChange={onToggleShowContent} />
          <label htmlFor="content" className="input-label">
            Content
          </label>
          <input
            type="checkbox"
            id="leftnavbar"
            onChange={onToggleShowLeftNavbar}
          />
          <label htmlFor="content" className="input-label">
            Left Navbar
          </label>
          <input
            type="checkbox"
            id="rightnavbar"
            onChange={onToggleShowRightNavbar}
          />
          <label htmlFor="content" className="input-label">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
