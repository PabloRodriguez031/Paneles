import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../modelo/contact';
import { ContactService } from '../../../servicios/contact.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactList: Contact[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  urlImage: Observable<string>;
  urlImage2: Observable<string>;

  constructor(public contactService: ContactService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/contact/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }

    onUpload2(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/contact/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent2 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
      }

  onSubmit(contactForm: NgForm) {

    this.contactService.getContact();

    if (contactForm.value.$keyRegistro == null) {
      // this.contactService.insertContact(contactForm.value);
      // Swal.fire({
      //   position: 'center',
      //   type: 'success',
      //   title: 'Creado con exito!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
    } else {

      Swal.fire({
        title: 'Are you sure?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, edit it!'
      }).then((result) => {
        if (result.value) {          
          this.contactService.updateContact(contactForm.value);
          Swal.fire(
            'Edited!',
            'Your page has been edited.',
            'success'
          )
        }
      })      

    }

  }
}
