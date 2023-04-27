import axios from "axios";
import { useState } from "react";
import "./adminCard.css";
function AddAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("active");
  const [type, setType] = useState("Admin");
  const handleClick = () => {
    console.log(username, password, type, status);
    axios
      .post("http://localhost:5000/admin/add", {
        username,
        password,
        status,
        type,
        // data: Date.now(),
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="admin-card">
      <h1>Add Admin</h1>
      <input
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="input-admin"
        type="text"
      />
      <input
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="input-admin"
        type="password"
      />
      <select
        value={status}
        name="status"
        onChange={(e) => setStatus(e.target.value)}
        className="select-admin"
      >
        <option> Active </option>
        <option> Block </option>
        <option> Delete </option>
      </select>
      <select
        value={type}
        name="type"
        onChange={(e) => setType(e.target.value)}
        className="select-admin"
      >
        <option>Admin</option>
        <option>Subadmin</option>
      </select>
      <button onClick={handleClick} className="submit">
        Submit
      </button>
    </div>
  );
}
export default AddAdmin;
