import { Component, OnInit } from '@angular/core';
import { Academy } from '../../../modelo/academy';
import { AcademyService } from '../../../servicios/academy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-academylist',
  templateUrl: './academylist.component.html',
  styleUrls: ['./academylist.component.css']
})
export class AcademylistComponent implements OnInit {

  academyList: Academy[];

  mostrarForm = false;

  constructor(public academyService: AcademyService) { }

  ngOnInit() {
    this.MostrarAcademy();
  }



  MostrarAcademy() {
    this.academyService.getAcademy().snapshotChanges().subscribe(item => {
      this.academyList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.academyList.push(x as Academy);
      });
    });
  }


  onEdit(academy: Academy) {
    this.mostrarForm = true;
    this.academyService.selectedAcademy = academy;
  }

}
