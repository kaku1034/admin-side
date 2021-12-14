import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const TabPanel = (props) => {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`index-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3}}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    )
}

export default TabPanel