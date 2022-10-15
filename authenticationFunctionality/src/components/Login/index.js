import Cookies from 'js-cookie'
import { Redirect,withRouter } from 'react-router-dom'
import './index.css'

const Login = () => {
    const onSuccessLogin = jwtToken => {
        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        const { history } = this.props
        history.replace('/')
    }

   const fetchloginDetails = async () => {
        const userDetails = { username:"rahul", password:"rahul@2021" }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringyfy(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (data.ok === true) {
            onSuccessLogin(data.jwt_token)
        }
    }

        const jwtToken = Cookies.get('jwt_token')

        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        return (
            <div className="login-bg">
                <h1 className="login-heading">Please Login</h1>
                <button className="login-button" type="button" onClick={fetchloginDetails} >
                    Login with Sample Creds
        </button>
            </div>
        )
    }
}

export default withRouter(Login)
