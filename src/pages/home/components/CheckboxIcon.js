import { Checkbox } from "@mui/material"



const CheckboxIcon = ({ Icon, OutlinedIcon, onClick, checked, color }) => {
    return (
        <Checkbox
            checked={checked}
            onClick={onClick}
            size="large"
            sx={{
                p: 2,
                color: color,
                '&.Mui-checked': {
                    color: color
                }
            }}
            checkedIcon={Icon}
            icon={OutlinedIcon}
        />
    )
}

export default CheckboxIcon