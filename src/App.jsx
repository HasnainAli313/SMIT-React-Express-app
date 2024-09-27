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

const updateUserById = (id) => {
  axios.put(`${API_URL}/${id}`, { name: updateUser.name })
    .then(response => {
      setUsers(users.map(user => (user.id === id ? response.data : user)));
      setUpdateUser({ id: '', name: '' }); // Reset input
      fetchUsers()
    })
    .catch(err => console.error(err));
};

const deleteUserById = (id) => {
  axios.delete(`${API_URL}/${id}`)
    .then(() => {
      setUsers(users.filter(user => user.id !== id));
    })
    .catch(err => console.error(err));
};


  return (
      <>
          <h1>CRUD Operations with Express & React</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter new user"
      />
      <button onClick={addUser}>Add User</button>

      {updateUser.id && (
        <div>
          <input
            type="text"
            value={updateUser.name}
            onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
            placeholder="Update user name"
          />
          <button onClick={() => updateUserById(updateUser.id)}>Update User</button>
        </div>
      )}

      
      </>
  )
}

export default App