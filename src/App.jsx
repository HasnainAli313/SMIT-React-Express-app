import { useEffect, useState } from "react"
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/users'

function App() {

  const [users, setUsers]  = useState([])
 const [newUser, setNewUser] = useState('');
 const [updateUser, setUpdateUser] = useState({ id: '', name: '' });

 async function fetchUsers(){
  const response = await axios.get(API_URL)
  const content = response.data
  
  setUsers(content.data)
}

useEffect(()=>{
  fetchUsers()
 },[])


 const addUser = () => {
  axios.post(API_URL, { name: newUser })
    .then(response => {
      setUsers([...users, response.data]);
      setNewUser(''); // Reset input
      fetchUsers()
    })
    .catch(err => console.error(err));
};

  return (

  )
}

export default App