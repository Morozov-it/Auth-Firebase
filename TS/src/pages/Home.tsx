import { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import { removeUser } from 'store/slices/userSlice';
import { Navigate } from "react-router-dom";
import { useAppDispatch } from 'hooks/redux-hooks';




const Home: FC = () => {
    const { isAuth, email, token, id } = useAuth()
    const dispatch = useAppDispatch()

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