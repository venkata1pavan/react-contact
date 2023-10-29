const ContactList = ({contacts}) => {

    

    return ( 
        <div className="contacts">
            {contacts.map((contact) => (
                <div className="contact-display" key={contact.id}>
                    <h2>{ contact.contact_name }</h2>
                    <p> { contact.number } </p>
                </div>
            ))}
        </div>
     );
}
 
export default ContactList;