import { Component, OnInit } from '@angular/core';
import { Home } from '../../modelo/home';
import { HomeService } from '../../servicios/home.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

  homeList: Home[];

  mostrarForm = false;
  
  constructor(public homeService: HomeService) { }
  
  ngOnInit() {
    this.MostrarHome();
  }



  MostrarHome() {
    this.homeService.getHome().snapshotChanges().subscribe(item => {
      this.homeList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.homeList.push(x as Home);
      });
    });
  }


  onEdit(home: Home) {
    this.mostrarForm = true;
    this.homeService.selectedHome = home;
  }


  // onDelete($key: string) {
  //   this.homeService.deleteHome($key);
  // }

}
