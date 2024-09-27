import { useEffect, useState } from "react"
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/users'

function App() {

  const [users, setUsers]  = useState([])
 const [newUser, setNewUser] = useState('');
 const [updateUser, setUpdateUser] = useState({ id: '', name: '' });


  return (

  )
}

export default App