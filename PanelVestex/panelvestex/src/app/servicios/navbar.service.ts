import { Injectable } from '@angular/core';
import { Navbar } from '../modelo/navbar';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  selectedNavbar: Navbar = new Navbar();
  navbarList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getNavbar() {
    return this.navbarList = this.firebase.list('navbar');
  }

  insertNavbar(navbar: Navbar) {
    // this.navbarList.push({

    // menu1: navbar.menu1,

    // menu2: navbar.menu2,
    // submenu2: navbar.submenu2,
    // submenu2_2: navbar.submenu2_2,
    // submenu2_3: navbar.submenu2_3,

    // menu3: navbar.menu3, 
    // submenu3: navbar.submenu3,
    // submenu3_2:navbar.submenu3_2,

    // menu4: navbar.menu4,
    // submenu4: navbar.submenu4,
    // submenu4_2:navbar.submenu4_2,

    // menu5:navbar.menu5,

    // menu6: navbar.menu6,

    // menu7: navbar.menu7,

    // menu8: navbar.menu8,

    // menu9: navbar.menu9
        
        
    // });
  }

  updateNavbar(navbar: Navbar) {
    this.navbarList.update(navbar.$keyRegistro, {      
      
    telefono: navbar.telefono,
    email: navbar.email,
        
    menu1: navbar.menu1,

    menu2: navbar.menu2,
    submenu2: navbar.submenu2,
    submenu2_2: navbar.submenu2_2,
    submenu2_3: navbar.submenu2_3,

    menu3: navbar.menu3, 
    submenu3: navbar.submenu3,
    submenu3_2:navbar.submenu3_2,

    menu4: navbar.menu4,
    submenu4: navbar.submenu4,
    submenu4_2:navbar.submenu4_2,

    menu5:navbar.menu5,

    menu6: navbar.menu6,

    menu7: navbar.menu7,

    menu8: navbar.menu8,

    menu9: navbar.menu9


    });
  }

}
