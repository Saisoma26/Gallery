import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const i1 = showContent ? 'checked' : ''
      const i2 = showLeftNavbar ? 'checked' : ''
      const i3 = showRightNavbar ? 'checked' : ''

      return (
        <div className="configuration-bg">
          <h1 className="configuration-heading">Layout</h1>
          <input
            type="checkbox"
            id="content"
            onChange={onToggleShowContent}
            checked={i1}
          />
          <label htmlFor="content" className="input-label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            id="leftnavbar"
            onChange={onToggleShowLeftNavbar}
            checked={i2}
          />
          <label htmlFor="content" className="input-label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            id="rightnavbar"
            onChange={onToggleShowRightNavbar}
            checked={i3}
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
