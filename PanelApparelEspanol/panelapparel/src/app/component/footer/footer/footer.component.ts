import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../modelo/footer';
import { FooterService } from '../../../servicios/footer.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerList: Footer[];

  uploadPercent: Observable<number>;
  uploadPercent2: Observable<number>;

  urlImage: Observable<string>;
  urlImage2: Observable<string>;

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

  constructor(public footerService: FooterService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onSubmit(footerForm: NgForm) {

    this.footerService.getFooter();

    if (footerForm.value.$keyRegistro == null) {
      this.footerService.insertFooter(footerForm.value);
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Creado con exito!',
        showConfirmButton: false,
        timer: 1500
      })
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
          this.footerService.updateFooter(footerForm.value);
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
