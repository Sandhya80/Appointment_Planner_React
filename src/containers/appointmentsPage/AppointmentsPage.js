import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment}) => {
  /* Define state variables for appointment info */
  const [title, setTitle] = useState('');  
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data */
    addAppointment(title, date, time, contact);

    setTitle('');
    setContact('');
    setDate('');
    setTime('');    
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts}
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}        
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};