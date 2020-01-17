import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../../modelo/navbar';
import { NavbarService } from '../../../servicios/navbar.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarList: Navbar[];

  uploadPercent: Observable<number>;

  urlImage: Observable<string>;

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/navbar/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL()) ).subscribe(); 
  }

  constructor(public navbarService: NavbarService, public storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onSubmit(navbarForm: NgForm) {

    this.navbarService.getNavbar();

    if (navbarForm.value.$keyRegistro == null) {
      // this.navbarService.insertNavbar(navbarForm.value);
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
          this.navbarService.updateNavbar(navbarForm.value);          
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
