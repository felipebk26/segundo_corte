import { useState, useEffect } from "react";
import "./App.css";
import { Users } from "./components/Users";
import { Form } from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  
  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data.users);
  };

  
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        address: e.target.address.value,
        age: e.target.age.value,
        photoUrl: e.target.photoUrl.value,
      }),
    });

    if (response.ok) {
      e.target.reset(); 
      getUsers(); 
    }
  };

  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <h1>Sistema de Usuarios - Parcial 2do Corte</h1>
      <Form onCreateUser={handleCreateUser} />
      <Users users={users} />
    </div>
  );
}

export default App;