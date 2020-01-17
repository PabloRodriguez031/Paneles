import { Component, OnInit } from '@angular/core';
import { Registration } from '../../../modelo/registration';
import { RegistrationService } from '../../../servicios/registration.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationList: Registration[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;

  urlImage: Observable<string>;
  urlImage2: Observable<string>;
  urlImage3: Observable<string>;

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/registration/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload2(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/registration/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent2 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload3(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/registration/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent3 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
  }


  constructor(public registrationService: RegistrationService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onSubmit(registrationForm: NgForm) {

    this.registrationService.getRegistration();

    if (registrationForm.value.$keyRegistro == null) {
      // this.registrationService.insertRegistration(registrationForm.value);
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
          this.registrationService.updateRegistration(registrationForm.value);
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
