import React, {useState} from 'react'

const Form = ({title, onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input
                placeholder='email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email" />
            <input
                placeholder='password'
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password" />
            <button onClick={() => {onSubmit(email, password)
                }}>
                {title}
            </button>
        </div>
    )
}

export default Form