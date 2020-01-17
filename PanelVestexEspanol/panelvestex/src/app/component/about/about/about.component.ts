import { Component, OnInit } from '@angular/core';
import { About } from '../../../modelo/about';
import { AboutService } from '../../../servicios/about.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutList: About[];

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


  constructor(public aboutService: AboutService, public storage: AngularFireStorage) { }

  onUpload(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/about/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
    }

  onUpload2(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/about/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent2 = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
    }  onUpload3(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent3 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
      }
  
    onUpload4(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent4 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage4 = ref.getDownloadURL()) ).subscribe(); 
       }
  
    onUpload5(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent5 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage5 = ref.getDownloadURL()) ).subscribe(); 
      }
  
    onUpload6(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent6 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage6 = ref.getDownloadURL()) ).subscribe(); 
      }
            
      onUpload7(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
       const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent7 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage7 = ref.getDownloadURL()) ).subscribe(); 
      }
            
    onUpload8(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent8 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage8 = ref.getDownloadURL()) ).subscribe(); 
      8
    }
            
    onUpload9(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent9 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage9 = ref.getDownloadURL()) ).subscribe(); 
      }
            
    onUpload10(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent10 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage10 = ref.getDownloadURL()) ).subscribe(); 
      }
  
    onUpload11(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent11 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage11 = ref.getDownloadURL()) ).subscribe(); 
      }
  
    onUpload12(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/about/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent12 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage12 = ref.getDownloadURL()) ).subscribe(); 
      }  

  

  ngOnInit() {
  }

  onSubmit(aboutForm: NgForm) {

    this.aboutService.getAbout();

    if (aboutForm.value.$keyRegistro == null) {
      
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
          this.aboutService.updateAbout(aboutForm.value);
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


