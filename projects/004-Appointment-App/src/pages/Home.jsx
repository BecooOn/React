import React from "react";
import Doctors from "../components/Doctors";

const Home = ({ appointmentData, doctorData }) => {
  // console.log(doctorData);
  return (
    <div>
      <h1 className="container text-center mt-5 p-4 text-info bg-body-secondary">ADA HOSPITAL</h1>
      <Doctors appointmentData={appointmentData} doctorData={doctorData}/>
    </div>
  );
};

export default Home;
