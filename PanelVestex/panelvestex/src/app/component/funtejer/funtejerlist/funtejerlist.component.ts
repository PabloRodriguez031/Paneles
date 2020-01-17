import { Component, OnInit } from '@angular/core';
import { Funtejer } from '../../../modelo/funtejer';
import { FuntejerService } from '../../../servicios/funtejer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-funtejerlist',
  templateUrl: './funtejerlist.component.html',
  styleUrls: ['./funtejerlist.component.css']
})
export class FuntejerlistComponent implements OnInit {

  funtejerList: Funtejer[];

  mostrarForm = false;

  constructor(public funtejerService: FuntejerService) { }

  ngOnInit() {
    this.MostrarFuntejer();
  }

  MostrarFuntejer() {
    this.funtejerService.getFuntejer().snapshotChanges().subscribe(item => {
      this.funtejerList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.funtejerList.push(x as Funtejer);
      });
    });
  }

  onEdit(funtejer: Funtejer) {
    this.mostrarForm = true;
    this.funtejerService.selectedFuntejer = funtejer;
  }

}
