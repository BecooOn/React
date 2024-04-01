import React, { useState } from "react";
// import './AddModal.css'; // CSS dosyasını içe aktar

const AddModal = ({
  selectedDoctor,
  addAppointment,
  setShowModal,
  closeModal,
}) => {
  // console.log(selectedDoctor);
  // console.log(setShowAppointmentList);
  
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");


  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
  const minDate = today.toISOString().slice(0,16);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ selectedDoctor, patientName, date, id: Date.now() });
    // Formu temizlemek için
    setPatientName("");
    setDate("");
    setShowModal(false);
  };
  const handleReset = () => {
    setPatientName("");
    setDate("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0"
          arial-label="Close"
          onClick={() => closeModal()}
        ></button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="text-start">
            Appoinment for {selectedDoctor}
          </label>
          <hr />
          <label htmlFor="name">Patient Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value.trim())}
            placeholder="Enter your name"
            required
          />
          <br />
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={minDate}
            required
          />
          <br />
          <div className="d-flex justify-content-evenly">
            <button type="submit" className="btn btn-primary w-25 rounded-3">
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger w-25 rounded-3"
              onClick={() => handleReset()}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
