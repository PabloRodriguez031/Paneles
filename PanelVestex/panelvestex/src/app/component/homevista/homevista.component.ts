import { Component, OnInit } from '@angular/core';
import { Home } from '../../modelo/home';
import { HomeService } from '../../servicios/home.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homevista',
  templateUrl: './homevista.component.html',
  styleUrls: ['./homevista.component.css']
})
export class HomevistaComponent implements OnInit {

  homeList: Home[];

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

}
