import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [salary, setSalary] = useState();
  const [user, setUser] = useState([]);
  const [id, setid] = useState();


  async function senddetails() {
    let empDetails = {
      name: name,
      address: address,
      salary: salary
    }
    let response = await axios.post('http://localhost:8080/emp/add', empDetails);
    alert("Details sent successfully");
  }
  async function getAllUsers() {
    let response = await axios.get('http://localhost:8080/emp/allUsers')

    setUser(response.data);
  }
  async function deleteUserBYId(id) {
    let response = await axios.delete(`http://localhost:8080/emp/delete/${id}`)
    getAllUsers();
    alert("User deleted successfully")

  }

  return (
    <>
      <div className="container">
        <h1 className="title">Employee Details Form</h1>
        <h1>Name</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h1>Address</h1>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <h1>Salary</h1>
        <input type="text" onChange={(e) => setSalary(e.target.value)} />
        <button onClick={senddetails}>Submit</button>
        <button onClick={getAllUsers}>Get all</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>address</th>
              <th>Salaray</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>{user.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.salary}</td>
              <td><button onClick={() => deleteUserBYId(user.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;