import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp: FC = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState('')

    
    const onSubmit = async (email: string, password: string) => {
        try {
            //получение данных из бд firebase
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            alert(`User with email ${user.email} has been created`)
            navigate('/login')
        } catch (e: any) {
            setIsError(e.message)
        }
    }
    
    return (
        <div>
            <Form title={'sign up'} onSubmit={onSubmit}/>
            {isError && <div>{isError}</div>}
        </div>
    )
}

export default SignUp