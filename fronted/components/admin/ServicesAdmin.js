import "./servicesAdmin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

function ServicesAdmin() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState();
  const [place, setPlace] = useState();
  const [SetDate, setStartDate] = useState();

  const handleChangeDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangePlace = (e) => {
    setPlace(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("image", image);
    formData.append("place", place);
    formData.append("SetDate",SetDate);

    axios
      .post("http://localhost:5000/api/services", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 404 && res.data.message === "Token Expired") {
          localStorage.setItem("token", null);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  return (
    <div className="admin-card">
      <input
        value={title}
        onChange={handleChange}
        placeholder="title"
        className="input-admin"
      />
      <input
        value={desc}
        onChange={handleChangeDesc}
        placeholder="description"
        className="input-admin"
      />

      <input
        value={place}
        onChange={handleChangePlace}
        placeholder="place"
        className="input-admin"
      />
      <input
        value={SetDate}
        onChange={handleChangeDate}
        placeholder="DD-MM-YYYY"
        className="input-admin"
      />

      <br />
      <input
        onChange={(e) => {
          // console.log(e.target.files[0]);
          setImage(e.target.files[0]);
        }}
        type="file"
      />

      <button onClick={handleClick} className="add-btn">
        Add Event
      </button>
    </div>
  );
}

export default ServicesAdmin;
