import "./servicesAdmin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
function ListAdmin() {
   const navigate =useNavigate()
  const [admins, setAdmins] = useState([]);
  useEffect(() =>{
    if(localStorage.getItem('type') ==='Admin'){
      navigate('/admin/list')
    }
  },[])
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/admins")
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="admin-card">
     
        <Link className="admin-add" to="/admin/add">Add Admin</Link>
      
      {admins.length > 0 &&
        admins.map((admin, index) => {
          return (
            <div key={index}>
              <div className="flex pl-3">
                username: {admin.username}, password: {admin.password}, type:
                {admin.type}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ListAdmin;
