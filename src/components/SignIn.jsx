import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const SignIn = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState('')

    const dispatch = useDispatch()
    
    const onSubmit = async (email, password) => {
        try {
            //получение данных из бд firebase
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            }))
            navigate('/')
        } catch (error) {
            setIsError(error.message)
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