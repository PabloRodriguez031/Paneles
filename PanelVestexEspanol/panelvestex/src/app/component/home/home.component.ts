import { Component, OnInit } from '@angular/core';
import { Home } from '../../modelo/home';
import { HomeService } from '../../servicios/home.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeList: Home[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  uploadPercent4: Observable<number>;
  uploadPercent5: Observable<number>;
  uploadPercent6: Observable<number>;
  urlImage: Observable<string>;
  urlImage2: Observable<string>;
  urlImage3: Observable<string>;
  urlImage4: Observable<string>;
  urlImage5: Observable<string>;
  urlImage6: Observable<string>;
  

  constructor(public homeService: HomeService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/home/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
    }

    onUpload2(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/home/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent2 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
      }

      onUpload3(e){
        // console.log('subir', e.target.files[0]);
        const id = Math.random().toString(36).substring(2);
        const file = e.target.files[0];
        const filePath = `uploads/home/${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent3 = task.percentageChanges();
        task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
        }

        onUpload4(e){
          // console.log('subir', e.target.files[0]);
          const id = Math.random().toString(36).substring(2);
          const file = e.target.files[0];
          const filePath = `uploads/home/${id}`;
          const ref = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);
          this.uploadPercent4 = task.percentageChanges();
          task.snapshotChanges().pipe( finalize(() => this.urlImage4 = ref.getDownloadURL()) ).subscribe(); 
          }

          onUpload5(e){
            // console.log('subir', e.target.files[0]);
            const id = Math.random().toString(36).substring(2);
            const file = e.target.files[0];
            const filePath = `uploads/home/${id}`;
            const ref = this.storage.ref(filePath);
            const task = this.storage.upload(filePath, file);
            this.uploadPercent5 = task.percentageChanges();
            task.snapshotChanges().pipe( finalize(() => this.urlImage5 = ref.getDownloadURL()) ).subscribe(); 
            }
    
            onUpload6(e){
              // console.log('subir', e.target.files[0]);
              const id = Math.random().toString(36).substring(2);
              const file = e.target.files[0];
              const filePath = `uploads/home/${id}`;
              const ref = this.storage.ref(filePath);
              const task = this.storage.upload(filePath, file);
              this.uploadPercent6 = task.percentageChanges();
              task.snapshotChanges().pipe( finalize(() => this.urlImage6 = ref.getDownloadURL()) ).subscribe(); 
              }          



  onSubmit(homeForm: NgForm) {

    this.homeService.getHome();

    if (homeForm.value.$keyRegistro == null) {
      // this.homeService.insertHome(homeForm.value);
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
          this.homeService.updateHome(homeForm.value);
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
