import React from "react";
import PropTypes from 'prop-types';
import { ContactPicker } from '../contactPicker/ContactPicker'
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit}) => {

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
const getContactNames = () => {
  return contacts.map((contact) => contact.name);
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type= 'text'
               name= 'title'
               value= {title}
               placeholder='Appointment Title'
               onChange={(e) => setTitle(e.target.value)} required />
      </label>      
      <br/>
      <label>
        <input type= 'date'
               name= 'date'
               value= {date}
               placeholder= 'Appointment Date'
               onChange={(e) => setDate(e.target.value)} 
               min={getTodayString()} required />
      </label>
      <br/>
      <label>
        <input type= 'time'
               name= 'time'
               value= {time}
               placeholder= 'Appointment Time'
               onChange={(e) => setTime(e.target.value)}
               required />
      
      </label>
      <br/>
      <label>
        <ContactPicker name= 'contact'
                       value= {contact}
                       contacts= {getContactNames()}
                       onChange={(e) => setContact(e.target.value)} />
      </label>
      <br/>
      <input type= 'submit'
             value='Add Appointment' />    
    </form>
  );
};

AppointmentsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}