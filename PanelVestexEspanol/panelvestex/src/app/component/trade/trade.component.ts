import { Component, OnInit } from '@angular/core';
import { Trade } from '../../modelo/trade';
import { TradeService } from '../../servicios/trade.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  tradeList: Trade[];

  constructor(public tradeService: TradeService) { }

  ngOnInit() {
  }

  onSubmit(tradeForm: NgForm) {

    this.tradeService.getTrade();

    if (tradeForm.value.$keyRegistro == null) {
      this.tradeService.insertTrade(tradeForm.value);
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
          this.tradeService.updateTrade(tradeForm.value);
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
