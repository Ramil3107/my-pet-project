import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"



const Form = ({ title, submitHandler }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '65ch' },
                    width:"65ch",
                    mt:3,
                    mb:1
                }}
                onSubmit={(e) => {
                    e.preventDefault()
                    submitHandler(email, password)
                }
                }>
                <div>
                    <TextField
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button
                        sx={{float:"right",mt:1}}
                        color="secondary"
                        variant="contained"
                        type="submit"
                        placeholder="submit"
                    >
                        {title}
                    </Button>
                </div>
            </Box>
        </>
    )
}

export default Form