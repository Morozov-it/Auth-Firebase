import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import { Navigate } from "react-router-dom";



const Home = () => {
    const { isAuth, email, token, id } = useAuth()
    const dispatch = useDispatch()

    return (
        <div>
            {isAuth
                ?
                <div>
                    <pre>{JSON.stringify({ email, token, id })}</pre>
                    <button onClick={()=>dispatch(removeUser())}>quit</button>
                </div>
                :
                <Navigate to="/login" />
            }
        </div>
    )
}

export default Home