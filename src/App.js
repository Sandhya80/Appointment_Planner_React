import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /* Define state variables for contacts and appointments */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /* Implement functions to add data to contacts and appointments */
  const addContact = (name, number, email) => {
    const newContact = {name: name, number: number, email: email};
    setContacts([...contacts, {newContact}]);       
  }
  const addAppointment = (title, contact, date, time) => {
    const newApmnt = {title: title, contact: contact, date: date, time: time};
    setAppointments([...appointments, {newApmnt}]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Adding props to the ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addappointment={addAppointment}/> /* Adding props to the AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
