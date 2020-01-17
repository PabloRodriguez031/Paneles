import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../../../modelo/sponsor';
import { SponsorService } from '../../../servicios/sponsor.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsorList: Sponsor[];

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
  uploadPercent14: Observable<number>;
  uploadPercent15: Observable<number>;
  uploadPercent16: Observable<number>;
  uploadPercent17: Observable<number>;


  urlImage: Observable<string>;
  urlImage2: Observable<string>;
  urlImage3: Observable<string>;
  urlImage4: Observable<string>;
  urlImage5: Observable<string>;
  urlImage6: Observable<string>;
  urlImage7: Observable<string>;
  urlImage8: Observable<string>;
  urlImage9: Observable<string>;
  urlImage10: Observable<string>;
  urlImage11: Observable<string>;
  urlImage12: Observable<string>;
  urlImage13: Observable<string>;
  urlImage14: Observable<string>;
  urlImage15: Observable<string>;
  urlImage16: Observable<string>;
  urlImage17: Observable<string>;

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload2(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent2 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload3(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent3 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
  }
  
  onUpload4(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent4 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage4 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload5(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent5 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage5 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload6(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent6 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage6 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload7(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent7 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage7 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload8(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent8 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage8 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload9(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent9 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage9 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload10(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent10 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage10 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload11(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent11 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage11 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload12(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent12 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage12 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload13(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent13 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage13 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload14(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent14 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage14 = ref.getDownloadURL()) ).subscribe(); 
  }

  onUpload15(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/sponsors/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent15 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage15 = ref.getDownloadURL()) ).subscribe(); 
  }

  constructor(public sponsorService: SponsorService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }       

  onSubmit(sponsorForm: NgForm) {

    this.sponsorService.getSponsor();

    if (sponsorForm.value.$keyRegistro == null) {
      // this.sponsorService.insertSponsor(sponsorForm.value);
      // Swal.fire({
      //   position: 'center',
      //   type: 'success',
      //   title: 'Creado con exito!',
      //   showConfirmButton: false,
      //   timer: 1500
      // })
    } else {

      Swal.fire({
        title: '¿Esta seguro?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, editar!'
      }).then((result) => {
        if (result.value) {
          this.sponsorService.updateSponsor(sponsorForm.value);
          Swal.fire(
            '¡Editado!',
            'Su página ha sido editada con éxito.',
            'success'
          )
        }
      })

    }

  }

}
