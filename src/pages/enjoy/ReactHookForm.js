import { Button, Divider, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"


const styles = {
    wrapper: {
        bgcolor: "rgb(10, 18, 39)",
        minHeight: "100vh",
        pt: 5,
        pb: 20
    },
    blockDescription: {
        bgcolor: "rgb(219, 99, 143)",
        border: "1px solid rgb(27, 46, 74)",
        borderRadius: "10px",
        width: "50%",
        minWidth: 350,
        mb: 10
    },
    elementsTitle: {
        mb: 5,
        border: "1px solid rgb(219, 99, 143)",
        borderRadius: "10px",
        width: "max-content",
        p: 1
    },
    textFieldOutlined: {
        minWidth: "30%",
        mt: 5,
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: "rgb(232, 241, 250)"
            },
            '&:hover fieldset': {
                borderColor: '#00FFFF',
            },
        },
        '& .MuiInputBase-root': {
            color: '#00FFFF',
        },
    },
}



const ReactHookForm = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    //Simple Form
    const [firstSimpleField, setFirstSimpleField] = useState("")
    const [secondSimpleField, setSecondSimpleField] = useState("")
    let [simpleRenderCounter, setSimpleRenderCounter] = useState(0)
    const [simpleData, setSimpleData] = useState("")
    useEffect(() => setSimpleRenderCounter(() => ++simpleRenderCounter), [firstSimpleField, secondSimpleField, simpleData])


    //React Hook Form
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: "onBlur" })
    let [formData, setFormData] = useState(``)
    let [renderCounter, setRenderCounter] = useState(0)
    const onSubmit = (data) => {
        let { firstField, secondField } = data
        setFormData(`${firstField} ${secondField}`)
    }
    useEffect(() => setRenderCounter(() => ++renderCounter), [formData])

    return (
        <Box align="center" sx={styles.wrapper}>
            <Box sx={{ mb: 5 }}>
                <Typography color="primary" fontWeight={600} variant="h4" >
                    React Hook Form
                </Typography>
            </Box>
            <Box sx={styles.blockDescription}>
                <Typography color="primary" p={1} variant="subtitle1" >
                    What is React Hook Form?
                    <br />
                    React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.
                </Typography>
            </Box>

            <Box>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>Simple Form</Typography>
                <Typography sx={{ width: "70%" }} variant="subtitle1" color="primary">
                This example shows us a simple usual usage form utilizing the local state. I just wanna show you the main difference between "simple form" and react hook form. This main difference has a number of renders. So you can see a number of renders in the counter below.
                </Typography>
            </Box>

            <Box sx={{ width: "50%" }}>
                <Typography sx={{ width: "30%", p: 1, border: "1px solid white" }} mt={5} color="primary" >
                    Renders : {simpleRenderCounter}
                </Typography>
                <Box
                    onSubmit={(event) => {
                        event.preventDefault()
                        setSimpleData(`${firstSimpleField} \n ${secondSimpleField}`)
                    }}
                    component="form"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >

                    <TextField
                        required
                        value={firstSimpleField}
                        onChange={(e) => setFirstSimpleField(e.target.value)}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="Require Field 1"
                        sx={styles.textFieldOutlined}
                    />
                    <TextField
                        required
                        onChange={(e) => setSecondSimpleField(e.target.value)}
                        value={secondSimpleField}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="Require Field 1"
                        sx={styles.textFieldOutlined}
                    />
                    <Button
                        variant="contained"
                        sx={{ width: "30%", height: 50, mt: 5, ml: 3 }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Box>
                <Typography mt={5} color="primary" >Submit Data: <br /> {simpleData}</Typography>

                <Divider variant="middle" sx={{ bgcolor: "white", width: "70%", mt: 10, mb: 10 }} />

            </Box>

            <Box>
                <Typography variant="h5" color="primary" sx={styles.elementsTitle}>React Hook Form</Typography>
                <Typography sx={{ width: "70%" }} variant="subtitle1" color="primary">
                    React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders.
                    <br />You can see validation errors on "onBlur" mode (validation -  min : 5, max : 30, required)
                </Typography>
            </Box>

            <Box sx={{ width: "50%" }}>
                <Typography sx={{ width: "30%", p: 1, border: "1px solid white" }} mt={5} color="primary" >
                    Renders : {renderCounter}
                </Typography>
                <Box
                    onSubmit={handleSubmit(data => onSubmit(data))}
                    component="form"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    <TextField
                        {...register("firstField", {
                            required: "Field is required!",
                            minLength: {
                                value: 5,
                                message: "Min length 5 symbols"
                            },
                            maxLength: {
                                value: 30,
                                message: "Max length 30 symbols"
                            }
                        })}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="Require Field 1"
                        sx={styles.textFieldOutlined}
                    />
                    <Box sx={{ width: "100%", textAlign: "left", mt: 2 }}>
                        <Typography color="error"  >{errors?.firstField?.message ? errors.firstField.message : null}</Typography>
                    </Box>

                    <TextField
                        {...register("secondField", {
                            required: "Field is required!",
                            minLength: {
                                value: 5,
                                message: "Min length 5 symbols"
                            },
                            maxLength: {
                                value: 30,
                                message: "Max length 30 symbols"
                            }
                        })}
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#00FFFF' }, }}
                        inputProps={{ maxLength: 40 }}
                        label="Require Field 1"
                        sx={styles.textFieldOutlined}
                    />
                    <Box sx={{ width: "100%", textAlign: "left", mt: 2 }}>
                        <Typography color="error">{errors?.secondField?.message ? errors.secondField.message : null}</Typography>
                    </Box>

                    <Button
                        disabled={!isValid}
                        variant="contained"
                        sx={{
                            width: "30%", height: 50, mt: 5, ml: 3,
                            "&:disabled": {
                                backgroundColor: '#696969',
                                color: "white"
                            }
                        }}
                        type="submit"
                    >
                        Submit
                    </Button>

                </Box>
                <Typography mt={5} color="primary" >Submit Data: <br /> {formData} </Typography>

                <Divider variant="middle" sx={{ bgcolor: "white", width: "70%", mt: 10, mb: 10 }} />
            </Box>

            <Box sx={{ width: "30%", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <Button
                    variant="outlined"
                    sx={{ height: 50 }}
                    component={NavLink}
                    to="/enjoy/redux" >
                    Back to Redux
                </Button>

                <Divider sx={{ bgcolor: "white", height: 40 }} orientation="vertical" light />

                <Button
                    variant="outlined"
                    sx={{ height: 50 }}
                    component={NavLink}
                    to="/home" >
                    Go to Roadmap
                </Button>
            </Box>

        </Box>
    )
}

export default ReactHookForm