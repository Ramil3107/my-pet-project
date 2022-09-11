import { Box } from "@mui/material"
import styles from "./Loader.module.css"


const Loader = () => {
    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className={styles.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Box>
    )

}

export default Loader