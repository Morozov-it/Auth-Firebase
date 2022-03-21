import { FC } from 'react'
import SignUp from 'components/SignUp'
import { Link } from 'react-router-dom'



const Register: FC = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />
            <p>
                Already have an account?
                <Link to={'/login'}>login</Link>
            </p>
        </div>
    )
}

export default Register