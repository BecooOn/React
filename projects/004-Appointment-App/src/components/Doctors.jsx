import React, { useState } from "react";
import AddModal from "./AddModal";
import AppointmentList from "./AppointmentList";

const Doctors = ({ appointmentData, doctorData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const closeModal = () => {
    setShowModal(false);
  };

  const [showAppointmentList, setShowAppointmentList] = useState([]);
  const addAppointment = (appointment) => {
    setShowAppointmentList([...showAppointmentList, appointment]);
  };
  const removeAppointment = (id) => {
    setShowAppointmentList(
      showAppointmentList.filter((item) => item.id !== id)
    );
  };

  const handleModal = (doctor) => {
    setSelectedDoctor(doctor.name);
    setShowModal(!showModal);
  };

  return !showModal ? (
    <div className="doctors-container container p-5">
      <div className="row">
        {doctorData.map((doctor) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={doctor.id}
          >
            <div className="doctor-card bg-info m-2 p-1 text-center rounded-3 img-div">
              <img src={doctor.img} alt={doctor.name} className="img-fluid rounded-3 img-doctor" />
              <h4>{doctor.name}</h4>
              <h4>{doctor.dep}</h4>
              <button
                type="button"
                className="btn btn-danger m-2"
                data-bs-toggle="modal"
                data-bs-target={"#" + doctor.id}
                key={doctor.id}
                onClick={() => handleModal(doctor)}
              >
                Randevu Al
              </button>
            </div>
          </div>
        ))}
      </div>

      <AppointmentList
        appointmentData={appointmentData}
        showAppointmentList={showAppointmentList}
        removeAppointment={removeAppointment}
      />
    </div>
  ) : (
    <div className="doctors-container container">
      <div className="row">
        {doctorData.map((doctor) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={doctor.id}
          >
            <div className="doctor-card bg-info m-2 p-1 text-center rounded-3">
              <img src={doctor.img} alt={doctor.name} className="img-fluid rounded-3" />
              <h4>{doctor.name}</h4>
              <h4>{doctor.dep}</h4>
              <button
                type="button"
                className="btn btn-danger m-2"
                data-bs-toggle="modal"
                data-bs-target={"#" + doctor.id}
                onClick={() => handleModal(doctor)}
              >
                Randevu Al
              </button>
            </div>
          </div>
        ))}
      </div>
      <AppointmentList
        appointmentData={appointmentData}
        showAppointmentList={showAppointmentList}
        removeAppointment={removeAppointment}
      />

      <AddModal
        selectedDoctor={selectedDoctor}
        addAppointment={addAppointment}
        setShowModal={setShowModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Doctors;
