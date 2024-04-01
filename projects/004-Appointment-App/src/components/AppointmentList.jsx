import React, { useState } from "react";

const AppointmentList = ({
  appointmentData,
  showAppointmentList,
  removeAppointment,
}) => {
  // console.log(showAppointmentList);
  const [showConsult, setShowConsult] = useState([]);
  const handleConsult = (id) => {
    setShowConsult((curConsult) =>
      curConsult.includes(id)
        ? curConsult.filter((curId) => curId !== id)
        : [...curConsult, id]
    );
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="container text-center mt-5 p-4 text-info bg-body-secondary">
          Appointment List
        </h2>
        {showAppointmentList.length > 0 ? (
          showAppointmentList.map((item, index) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <div className="card-header">
                  <span className="text-warning fs-4">Randevu {index + 1}</span>
                  <button
                    type="button"
                    className="btn-close float-end"
                    aria-label="Close"
                    onClick={() => removeAppointment(item.id)}
                  ></button>
                </div>
                <div
                  className="card-body position-relative"
                  onDoubleClick={() => handleConsult(item.id)}
                >
                  <ConsultComponent item={item} />
                  {showConsult.includes(item.id) && (
                    <div
                      className="position-absolute"
                      style={{ top: 0, bottom: 0, right: 0, left: 0 }}
                    >
                      <h2
                        className="btn btn-success position-absolute w-50"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        CONSULTED
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="border border-2 rounded-4 m-3 p-3">
            <img src="./img/appointment.jpg" alt="" width="100%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;

const ConsultComponent = ({ item }) => {
  return (
    <div className="p-2">
      <h5 className="card-title">
        <span className="text-info">Doctor:</span> {item.selectedDoctor}
      </h5>
      <h5 className="card-text">
        <span className="text-info">Patient-Name:</span> {item.patientName}
      </h5>
      <h6 className="card-text">
        <span className="text-info">Date:</span> {item.date}
      </h6>
    </div>
  );
};
