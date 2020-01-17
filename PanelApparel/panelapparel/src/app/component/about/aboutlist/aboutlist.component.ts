import { Component, OnInit } from '@angular/core';
import { About } from '../../../modelo/about';
import { AboutService } from '../../../servicios/about.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aboutlist',
  templateUrl: './aboutlist.component.html',
  styleUrls: ['./aboutlist.component.css']
})
export class AboutlistComponent implements OnInit {

  aboutList: About[];

  mostrarForm = false;

  constructor(public aboutService: AboutService) { }

  ngOnInit() {
    this.MostrarAbout();
  }



  MostrarAbout() {
    this.aboutService.getAbout().snapshotChanges().subscribe(item => {
      this.aboutList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.aboutList.push(x as About);
      });
    });
  }


  onEdit(about: About) {
    this.mostrarForm = true;
    this.aboutService.selectedAbout = about;
  }


  // onDelete($key: string) {
  //   this.homeService.deleteHome($key);
  // }

}
