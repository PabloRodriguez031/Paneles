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
    this.navbarList.push({
      menu1: navbar.menu1,
      submenu1: navbar.submenu1,
      submenu1_2: navbar.submenu1_2,
      submenu1_3: navbar.submenu1_3,
      submenu1_4: navbar.submenu1_4,
  
      menu2: navbar.menu2,
      submenu2: navbar.submenu2,
      submenu2_2: navbar.submenu2_2,
      submenu2_3: navbar.submenu2_3,
      submenu2_4: navbar.submenu2_4,
      submenu2_5: navbar.submenu2_5,
      submenu2_6: navbar.submenu2_6,
  
      menu3: navbar.menu3,
      submenu3: navbar.submenu3,
      submenu3_2:navbar.submenu3_2,
  
      menu4: navbar.menu4,
      submenu4: navbar.submenu4,
  
      menu5:navbar.menu5    
    });
  }

  updateNavbar(navbar: Navbar) {
    this.navbarList.update(navbar.$keyRegistro, {           
      menu1: navbar.menu1,
      submenu1: navbar.submenu1,
      submenu1_2: navbar.submenu1_2,
      submenu1_3: navbar.submenu1_3,
      submenu1_4: navbar.submenu1_4,
  
      menu2: navbar.menu2,
      submenu2: navbar.submenu2,
      submenu2_2: navbar.submenu2_2,
      submenu2_3: navbar.submenu2_3,
      submenu2_4: navbar.submenu2_4,
      submenu2_5: navbar.submenu2_5,
      submenu2_6: navbar.submenu2_6,
  
      menu3: navbar.menu3,
      submenu3: navbar.submenu3,
      submenu3_2:navbar.submenu3_2,
  
      menu4: navbar.menu4,
      submenu4: navbar.submenu4,
  
      menu5:navbar.menu5,

      image1: navbar.image1
    });
  }

}
