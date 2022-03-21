import React, { FC, useState } from 'react'

interface IFormProps {
    title: string,
    onSubmit: (email: string, password: string)=>void
}

const Form: FC<IFormProps> = ({title, onSubmit}) => {
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