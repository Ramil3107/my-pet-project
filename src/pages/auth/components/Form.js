import { useState } from "react"



const Form = ({ title, submitHandler }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitHandler(email, password)
            }
            }>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="submit"
                    placeholder="submit"
                    value={title}
                />
            </form>
        </>
    )
}

export default Form