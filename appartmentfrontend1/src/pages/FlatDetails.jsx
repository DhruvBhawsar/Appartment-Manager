import "./FlatDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const FlatDetails = () => {
  const [data, setData] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://flat-management.herokuapp.com/flat/${_id}`)
      .then((res) => {
        console.log(res.data.flatblock);
        setData(res.data);
      });
  };

  return (
    <div id="flatdetailscont">
      <div id="flatImage_div">
        <img id="flatImage" src={data.flatImage} alt="" />
      </div>
      <div id="flatdetails">
        <h2>
          <i> Flat Details </i>
        </h2>
        <h3>Block : {data.flatblock}</h3>
        <h3>Flat No.: {data.flatNumber}</h3>
        <h3>Owner name : {data.name}</h3>
        <h3>Gender : {data.gender} </h3>
        <h3>Flat type: {data.flatType}</h3>
      </div>{" "}
    </div>
  );
};
