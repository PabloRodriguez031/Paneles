import { Component, OnInit } from '@angular/core';
import { Service } from '../../../modelo/service';
import { ServiceService } from '../../../servicios/service.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  serviceList: Service[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  uploadPercent3: Observable<number>;
  uploadPercent4: Observable<number>;
  uploadPercent5: Observable<number>;
  urlImage: Observable<string>;
  urlImage2: Observable<string>;
  urlImage3: Observable<string>;
  urlImage4: Observable<string>;
  urlImage5: Observable<string>;

  constructor(public serviceService: ServiceService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/service/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
    }

    onUpload2(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/service/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent2 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
      }

      onUpload3(e){
        // console.log('subir', e.target.files[0]);
        const id = Math.random().toString(36).substring(2);
        const file = e.target.files[0];
        const filePath = `uploads/service/${id}`;
        const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        this.uploadPercent3 = task.percentageChanges();
        task.snapshotChanges().pipe( finalize(() => this.urlImage3 = ref.getDownloadURL()) ).subscribe(); 
        }

        onUpload4(e){
          // console.log('subir', e.target.files[0]);
          const id = Math.random().toString(36).substring(2);
          const file = e.target.files[0];
          const filePath = `uploads/service/${id}`;
          const ref = this.storage.ref(filePath);
          const task = this.storage.upload(filePath, file);
          this.uploadPercent4 = task.percentageChanges();
          task.snapshotChanges().pipe( finalize(() => this.urlImage4 = ref.getDownloadURL()) ).subscribe(); 
          }

          onUpload5(e){
            // console.log('subir', e.target.files[0]);
            const id = Math.random().toString(36).substring(2);
            const file = e.target.files[0];
            const filePath = `uploads/service/${id}`;
            const ref = this.storage.ref(filePath);
            const task = this.storage.upload(filePath, file);
            this.uploadPercent5 = task.percentageChanges();
            task.snapshotChanges().pipe( finalize(() => this.urlImage5 = ref.getDownloadURL()) ).subscribe(); 
            }

  onSubmit(serviceForm: NgForm) {

    this.serviceService.getService();

    if (serviceForm.value.$keyRegistro == null) {
      // this.serviceService.insertService(serviceForm.value);
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
          this.serviceService.updateService(serviceForm.value);
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
