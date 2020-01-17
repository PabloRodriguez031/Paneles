import { Component, OnInit } from '@angular/core';
import { Registration } from '../../../modelo/registration';
import { RegistrationService } from '../../../servicios/registration.service';

@Component({
  selector: 'app-registrationlist',
  templateUrl: './registrationlist.component.html',
  styleUrls: ['./registrationlist.component.css']
})
export class RegistrationlistComponent implements OnInit {

  registrationList: Registration[];

  mostrarForm = false;

  constructor(public registrationService: RegistrationService) { }

  ngOnInit() {
    this.MostrarShow();
  }

  MostrarShow() {
    this.registrationService.getRegistration().snapshotChanges().subscribe(item => {
      this.registrationList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.registrationList.push(x as Registration);
      });
    });
  }

  
  onEdit(show: Registration) {
    this.mostrarForm = true;
    this.registrationService.selectedRegistration = show;
  }
}
