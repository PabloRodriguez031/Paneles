import { Component, OnInit } from '@angular/core';
import { Resources } from '../../../modelo/resources';
import { ResourcesService } from '../../../servicios/resources.service';
@Component({
  selector: 'app-resourceslist',
  templateUrl: './resourceslist.component.html',
  styleUrls: ['./resourceslist.component.css']
})
export class ResourceslistComponent implements OnInit {

  resourcesList: Resources[];

  mostrarForm = false;

  constructor(public resourcesService: ResourcesService) { }

  ngOnInit() {
    this.MostrarShow();
  }

  MostrarShow() {
    this.resourcesService.getResources().snapshotChanges().subscribe(item => {
      this.resourcesList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.resourcesList.push(x as Resources);
      });
    });
  }

  
  onEdit(resources: Resources) {
    this.mostrarForm = true;
    this.resourcesService.selectedResources = resources;
  }

}
