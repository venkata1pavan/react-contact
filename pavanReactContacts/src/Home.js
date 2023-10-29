import { useState } from 'react';
import ContactList from './ContactList';


const Home = () => {
    const [ contacts, setContacts ] = useState([
        {contact_name: "John Doe", number:"0109878278"},
        {contact_name: "Chris Lenz", number:"0189567754"},
        {contact_name: "Jaime Hans", number:"0189651346"},
        {contact_name: "Risper Reider", number:"0109873452"},
        {contact_name: "Mandela Lumumba", number:"01234568"}
    ]);
    return ( 
        <div className="home">
            <ContactList contacts={contacts} />
        </div>
     );
}
 
export default Home;