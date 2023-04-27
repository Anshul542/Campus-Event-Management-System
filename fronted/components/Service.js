import "./Services.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Service() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  // local api call using axios
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <input
        placeholder="Search"
        className="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex">
        {data.length > 0
          ? data
              .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase())
              .filter((item) => {
                return (
                  item.title.toLowerCase().includes(filter.toLowerCase()) ||
                  item.description.toLowerCase().includes(filter.toLowerCase())
                );
              })
              .map((serviceItem, serviceIndex) => {
                return (
                  <div key={serviceIndex + 1} className="card">
                    <img
                      width="100%"
                      src={`http://localhost:5000/${serviceItem.imageUrl}`}
                    />

                    <div className="title">{serviceItem?.title}</div>
                    <div className="des">{serviceItem?.description}</div>
                     <h4 className="place">Place</h4>

                    <div className="setplace">{serviceItem?.place}</div>
                    <h4 className="date">Date</h4>
                    <div className="setdate">{serviceItem?.SetDate}</div>
                  </div>
                );
              })
          : "no data found"}
      </div>
    </>
  );
}
export default Service;
