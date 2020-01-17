import { Component, OnInit } from '@angular/core';
import { Show } from '../../../modelo/show';
import { ShowService } from '../../../servicios/show.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  showList: Show[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  uploadPercent4: Observable<number>;
  uploadPercent5: Observable<number>;
  uploadPercent6: Observable<number>;
  uploadPercent7: Observable<number>;
  uploadPercent8: Observable<number>;
  uploadPercent9: Observable<number>;
  uploadPercent10: Observable<number>;
  uploadPercent11: Observable<number>;
  uploadPercent12: Observable<number>;
  uploadPercent13: Observable<number>;

  urlImage: Observable<string>;
  urlImage2: Observable<string>;
  urlImage3: Observable<string>;
  urlImage4: Observable<string>;
  urlImage5: Observable<string>;
  urlImage6: Observable<string>;
  urlImage7: Observable<string>;
  urlImage8: Observable<string>;

  urlFile: Observable<string>;
  urlFile2: Observable<string>;
  urlFile3: Observable<string>;
  urlFile4: Observable<string>;
  urlFile5: Observable<string>;


  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload2(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent2 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload3(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent3 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
  }
  
  onUpload4(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent4 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage4 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload5(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent5 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage5 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload6(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent6 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage6 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload7(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent7 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage7 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload8(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/show/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent8 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage8 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload9(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `downloads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent9 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlFile = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload10(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `downloads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent10 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlFile2 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload11(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `downloads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent11 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlFile3 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload12(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `downloads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent12 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlFile4 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload13(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `downloads/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent13 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlFile5 = ref.getDownloadURL()) ).subscribe(); 
  }

  constructor(public showService: ShowService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onSubmit(showForm: NgForm) {

    this.showService.getShow();

    if (showForm.value.$keyRegistro == null) {
      // this.showService.insertShow(showForm.value);
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
          this.showService.updateShow(showForm.value);
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

