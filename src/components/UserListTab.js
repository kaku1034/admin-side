import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const UserListTab = (props) => {
    const {handleTabChange, value} = props

    return (
        <Box>
            <Tabs value={value} onChange={handleTabChange} centered>
                <Tab label='承認済'/>
                <Tab label='未承認'/>
            </Tabs>
        </Box>
    )
}

export default UserListTab;