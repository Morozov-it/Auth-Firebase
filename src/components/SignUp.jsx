import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState('')

    const dispatch = useDispatch()
    
    const onSubmit = async (email, password) => {
        try {
            //получение данных из бд firebase
            const auth = getAuth();
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            alert(`User with email ${user.email} has been created`)
            navigate('/login')
        } catch (error) {
            setIsError(error.message)
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