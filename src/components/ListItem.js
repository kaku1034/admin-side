import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/system/Box"

const ListItem = () => {
    return (
        <ListItemText 
            primary="Name"
            secondary={
                <Box>
                    <div>adfasd:dsfa</div>
                    <div>adfasd:dsfa</div>
                    <div>adfasd:dsfa</div>
                </Box>
            }
        >
        </ListItemText>
    )
}

export default ListItem