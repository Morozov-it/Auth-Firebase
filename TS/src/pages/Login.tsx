import { FC } from 'react'
import SignIn from 'components/SignIn'
import { Link } from 'react-router-dom'

const Login: FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <SignIn />
            <p>
                or <Link to={'/register'}>register</Link>
            </p>
        </div>
    )
}

export default Login