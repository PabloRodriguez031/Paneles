import { Component, OnInit } from '@angular/core';
import { Show } from '../../../modelo/show';
import { ShowService } from '../../../servicios/show.service';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  showList: Show[];

  mostrarForm = false;

  constructor(public showService: ShowService) { }

  ngOnInit() {
    this.MostrarShow();
  }

  MostrarShow() {
    this.showService.getShow().snapshotChanges().subscribe(item => {
      this.showList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.showList.push(x as Show);
      });
    });
  }

  
  onEdit(show: Show) {
    this.mostrarForm = true;
    this.showService.selectedShow = show;
  }

}
