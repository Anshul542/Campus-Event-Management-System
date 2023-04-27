import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./adminCard.css";
function LoginAdmin() {
    const navigete=useNavigate()
  const [username, setUsername] = useState("");
   
  const [password, setPassword] = useState("");
   
  const handleClick = () => {
    console.log(username, password);
    axios
      .post("http://localhost:5000/admin/login", {
        username: username,
        password,
         
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('type',res.data.type)
        localStorage.setItem('token',res.data.token)
    navigete('/admin/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="admin-card">
      <h1>Login Admin</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="input-admin"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="input-admin"
        type="password"
      />
      
      
      <button onClick={handleClick} className="submit">
        Submit
      </button>
    </div>
  );
}
export default LoginAdmin;
