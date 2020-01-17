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
    return this.contactList = this.firebase.list('contact');
  }

  // insertContact(contact: Contact) {
  //   this.contactList.push({
  //       telefono: contact.telefono,
  //       email: contact.email,
  //       direccion: contact.direccion
  //   });
  // }

  updateContact(contact: Contact) {
    this.contactList.update(contact.$keyRegistro, {
        titulo: contact.titulo,
        titulo2: contact.titulo2,
        telefono: contact.telefono,
        email: contact.email,
        direccion: contact.direccion,
        image1: contact.image1,
        image2: contact.image2
    });
  }

}
