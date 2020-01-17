import { Component, OnInit } from '@angular/core';
import { Library } from '../../modelo/library';
import { LibraryService } from '../../servicios/library.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryList: Library[];
  LibraryService: any;
  
  constructor(public libraryService: LibraryService) { }
  
  ngOnInit() {
  }
  
  onSubmit(libraryForm: NgForm) {

     this.libraryService.getLibrary();

     if (libraryForm.value.$keyRegistro == null) {
       this.libraryService.insertLibrary(libraryForm.value);
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
          this.libraryService.updateLibrary(libraryForm.value);
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
