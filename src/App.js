import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import UserList from './components/UserList'
import Tab from './components/UserListTab'
import TabPanel from './components/TabPanel';
import ListItem from './components/ListItem'
import { getApprovedList, getUnapprovedList } from './services/userList';

function App() {
  const [value, setValue] = useState(0)
  // const [approvedList, setApprovedlist] = useState([])
  // const [unapprovedList, setUnapprovedlist] = useState([])

  useEffect(() => {
    getApprovedList().then(data => {
      console.log(data)
    })
  }, [])

  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }
  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Tab handleTabChange={handleTabChange} value={value}/>
        <TabPanel value={value} index={0}>
          <UserList value={value}>
            <ListItem />
          </UserList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserList value={value}>
            <ListItem />
          </UserList>
        </TabPanel>
      </Box>
    </div>
  );
}

export default App;
