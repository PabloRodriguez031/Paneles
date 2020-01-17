import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../../modelo/navbar';
import { NavbarService } from '../../../servicios/navbar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbarlist',
  templateUrl: './navbarlist.component.html',
  styleUrls: ['./navbarlist.component.css']
})
export class NavbarlistComponent implements OnInit {

  navbarList: Navbar[];

  mostrarForm = false;

  constructor(public navbarService: NavbarService) { }

  ngOnInit() {
    this.MostrarNavbar();
  }



  MostrarNavbar() {
    this.navbarService.getNavbar().snapshotChanges().subscribe(item => {
      this.navbarList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.navbarList.push(x as Navbar);
      });
    });
  }


  onEdit(navbar: Navbar) {
    this.mostrarForm = true;
    this.navbarService.selectedNavbar = navbar;
  }

}
