import { Avatar, Button, Divider, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Box } from "@mui/system"
import { getAuth } from "firebase/auth"



const Info = ({ displayName, defaultAvatar, setEditMode, logoutHandler, creationTime, email, id, photoURL, editMode }) => {

    const fields = [
        {
            label: "Nickname: ",
            value: displayName,
            empty: "Create your nickname"
        },
        {
            label: "Email: ",
            value: email,
            empty: "Add your email",
        },
        {
            label: "Account Creation Time: ",
            value: creationTime,
            empty: "Account Creation Time",
        },
    ]
    return (
        <>
            <Box sx={{ width: "100%", mt: 3, ml: 1, mr: 1, }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                    <Avatar
                        sx={{ width: 150, height: 150 }}
                        src={photoURL || defaultAvatar}
                    />
                    <Box sx={{ ml: 3 }}>
                        <Typography variant="h5">{displayName}</Typography>
                        <Typography
                            sx={{ mb: 2 }}
                            color={blue[500]}
                            variant="subtitle1"
                        >
                            User ID: {id}
                        </Typography>
                        <Button
                            sx={{ mr: 3 }}
                            size="small"
                            variant="outlined"
                            color="info"
                            onClick={() => setEditMode(!editMode)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            onClick={logoutHandler}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <Box sx={{ ml: 0, width: "80%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                        <Divider variant="fullwidth" color="white" sx={{ mt: 5, color: "black", display: "block" }} />
                        {
                            fields.map(field => {
                                return (
                                    <Box key={field.label}>
                                        <Box sx={{ display: "flex", flexWrap: "wrap", p: 3 }}>
                                            <Typography sx={{ mr: 1 }} variant="h6">
                                                {field.label}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color={field.value ? "secondary" : "GrayText"}
                                            >
                                                {field.value || field.empty}
                                            </Typography>
                                        </Box>
                                        <Divider variant="fullwidth" color="white" sx={{ color: "black" }} />
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Info