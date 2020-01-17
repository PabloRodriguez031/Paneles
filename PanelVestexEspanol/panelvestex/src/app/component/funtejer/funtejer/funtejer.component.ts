import { Component, OnInit } from '@angular/core';
import { Funtejer } from '../../../modelo/funtejer';
import { FuntejerService } from '../../../servicios/funtejer.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-funtejer',
  templateUrl: './funtejer.component.html',
  styleUrls: ['./funtejer.component.css']
})
export class FuntejerComponent implements OnInit {

  funtejerList: Funtejer[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;
  urlImage: Observable<string>;
  urlImage2: Observable<string>;  

  constructor(public funtejerService: FuntejerService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onUpload(e){
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/funtejer/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }


    onUpload2(e){
      // console.log('subir', e.target.files[0]);
      const id = Math.random().toString(36).substring(2);
      const file = e.target.files[0];
      const filePath = `uploads/funtejer/${id}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent2 = task.percentageChanges();
      task.snapshotChanges().pipe( finalize(() => this.urlImage2 = ref.getDownloadURL()) ).subscribe(); 
      }

  onSubmit(funtejerForm: NgForm) {
    
    this.funtejerService.getFuntejer();
    if (funtejerForm.value.$keyRegistro == null) {
      // this.funtejerService.insertFuntejer(funtejerForm.value);
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
          this.funtejerService.updateFuntejer(funtejerForm.value);
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
