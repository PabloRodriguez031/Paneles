import { Injectable } from '@angular/core';
import { Contact } from '../modelo/contact';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  selectedContact: Contact = new Contact();
  contactList: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase) { }

  getContact() {
    return this.contactList = this.firebase.list('contact_es');
  }

  insertContact(contact: Contact) {
    this.contactList.push({
      titulo: contact.titulo,

      titulo_seccion1: contact.titulo_seccion1,
      app_caja1_seccion1: contact.app_caja1_seccion1,
      redes_caja1_seccion1: contact.redes_caja1_seccion1,
  
      nombre_caja1_seccion2: contact.nombre_caja1_seccion2,
      puesto_caja1_seccion2: contact.puesto_caja1_seccion2,
      correo_caja1_seccion2: contact.correo_caja1_seccion2,
      email_caja1_seccion2: contact.email_caja1_seccion2,
      nombre_caja2_seccion2: contact.nombre_caja2_seccion2,
      puesto_caja2_seccion2: contact.puesto_caja2_seccion2,
      correo_caja2_seccion2: contact.correo_caja2_seccion2,
      email_caja2_seccion2: contact.email_caja2_seccion2,
      linkedin_caja2_seccion2: contact.linkedin_caja2_seccion2,
      nombre_caja3_seccion2: contact.nombre_caja3_seccion2,
      puesto_caja3_seccion2: contact.puesto_caja3_seccion2,
      correo_caja3_seccion2: contact.correo_caja3_seccion2,
      email_caja3_seccion2: contact.email_caja3_seccion2,

      image1: contact.image1
    });
  }

  updateContact(contact: Contact) {
    this.contactList.update(contact.$keyRegistro, {    
      titulo: contact.titulo,

      titulo_seccion1: contact.titulo_seccion1,
      app_caja1_seccion1: contact.app_caja1_seccion1,
      redes_caja1_seccion1: contact.redes_caja1_seccion1,
  
      nombre_caja1_seccion2: contact.nombre_caja1_seccion2,
      puesto_caja1_seccion2: contact.puesto_caja1_seccion2,
      correo_caja1_seccion2: contact.correo_caja1_seccion2,
      email_caja1_seccion2: contact.email_caja1_seccion2,
      nombre_caja2_seccion2: contact.nombre_caja2_seccion2,
      puesto_caja2_seccion2: contact.puesto_caja2_seccion2,
      correo_caja2_seccion2: contact.correo_caja2_seccion2,
      email_caja2_seccion2: contact.email_caja2_seccion2,
      linkedin_caja2_seccion2: contact.linkedin_caja2_seccion2,
      nombre_caja3_seccion2: contact.nombre_caja3_seccion2,
      puesto_caja3_seccion2: contact.puesto_caja3_seccion2,
      correo_caja3_seccion2: contact.correo_caja3_seccion2,
      email_caja3_seccion2: contact.email_caja3_seccion2,
      
      image1: contact.image1
    });
  }
}
