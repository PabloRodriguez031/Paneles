import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../modelo/footer';
import { FooterService } from '../../../servicios/footer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footerlist',
  templateUrl: './footerlist.component.html',
  styleUrls: ['./footerlist.component.css']
})
export class FooterlistComponent implements OnInit {

  footerList: Footer[];

  mostrarForm = false;

  constructor(public footerService: FooterService) { }

  ngOnInit() {
    this.MostrarFooter();
  }



  MostrarFooter() {
    this.footerService.getFooter().snapshotChanges().subscribe(item => {
      this.footerList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.footerList.push(x as Footer);
      });
    });
  }


  onEdit(footer: Footer) {
    this.mostrarForm = true;
    this.footerService.selectedFooter = footer;
  }

}
