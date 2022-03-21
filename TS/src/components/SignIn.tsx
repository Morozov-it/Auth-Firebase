import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from 'hooks/redux-hooks';



const SignIn: FC = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState<string>('')

    const dispatch = useAppDispatch()
    
    const onSubmit = async (email: string, password: string) => {
        try {
            //получение данных из бд firebase
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            dispatch(setUser({
                email: user.email,
                token: user.refreshToken,
                id: user.uid,
            }))
            navigate('/')
        } catch (e: any) {
            setIsError(e.message)
        }
    }

    return (
        <div>
            <Form title={'sign in'} onSubmit={onSubmit}/>
            {isError && <div>{isError}</div>}
        </div>
    )
}

export default SignIn