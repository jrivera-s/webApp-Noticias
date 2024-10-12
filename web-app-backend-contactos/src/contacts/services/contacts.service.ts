import { Injectable } from '@nestjs/common';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123456789' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987654321' },
    { id: 3, name: 'Mike Whithe', email: 'mwhithe@example.com', phone: '8765466757' },
    { id: 4, name: 'Jess Sand', email: 'jsand@example.com', phone: '987865467' }
    // Agrega más contactos simulados aquí
  ];

  // Obtener todos los contactos
  findAll(): Contact[] {
    return this.contacts;
  }

  // Obtener un contacto por ID
  findOne(id: number): Contact {
    return this.contacts.find(contact => contact.id === id);
  }
}
