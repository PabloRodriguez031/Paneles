import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../modelo/footer';
import { FooterService } from '../../../servicios/footer.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerList: Footer[];

  constructor(public footerService: FooterService) { }

  ngOnInit() {
  }

  onSubmit(footerForm: NgForm) {

    this.footerService.getFooter();

    if (footerForm.value.$keyRegistro == null) {
      // this.footerService.insertFooter(footerForm.value);
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
