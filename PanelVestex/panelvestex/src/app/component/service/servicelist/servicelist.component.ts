import { Component, OnInit } from '@angular/core';
import { Service } from '../../../modelo/service';
import { ServiceService } from '../../../servicios/service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {

  serviceList: Service[];

  mostrarForm = false;

  constructor(public serviceService: ServiceService) { }

  ngOnInit() {
    this.MostrarService();
  }



  MostrarService() {
    this.serviceService.getService().snapshotChanges().subscribe(item => {
      this.serviceList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.serviceList.push(x as Service);
      });
    });
  }


  onEdit(service: Service) {
    this.mostrarForm = true;
    this.serviceService.selectedService = service;
  }



}
