import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../modelo/contact';
import { ContactService } from '../../../servicios/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contactList: Contact[];

  mostrarForm = false;

  constructor(public contactService: ContactService) { }

  ngOnInit() {
    this.MostrarContact();
  }



  MostrarContact() {
    this.contactService.getContact().snapshotChanges().subscribe(item => {
      this.contactList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.contactList.push(x as Contact);
      });
    });
  }


  onEdit(contact: Contact) {
    this.mostrarForm = true; 
    this.contactService.selectedContact = contact;
  }

}
