import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactList.css'; // Importa el archivo CSS personalizado

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/contactosEstudiantes') // enpoint de contactos de Estudiantes
      .then(response => {
        setContacts(response.data.data); // Accedemos a la lista de contactos
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="alert alert-info">Cargando contactos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de Contactos</h1>
      <ul className="list-group">
        {contacts.map(contact => (
          <li key={contact.id} className="list-group-item">
            <h5>{contact.name}</h5>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Teléfono:</strong> {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
