import { List } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const UserList = (props) => {
    return (
        <List>
            <ListItemButton 
                component="a" 
                href="#simple-listhhs">
                {props.children}
            </ListItemButton>
            <Divider />
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam"/>
            </ListItemButton>
        </List>
    )
}

export default UserList