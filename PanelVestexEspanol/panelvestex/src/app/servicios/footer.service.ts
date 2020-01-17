import { Injectable } from '@angular/core';
import { Footer } from '../modelo/footer';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  selectedFooter: Footer = new Footer();
  footerList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getFooter() {
    return this.footerList = this.firebase.list('footer_es');
  }

  insertFooter(footer: Footer) {
    this.footerList.push({
      titulo1: footer.titulo1,
      desc1: footer.desc1,
      desc1_2: footer.desc1_2,
      desc1_3: footer.desc1_3,
      desc1_4: footer.desc1_4,
  
      titulo2: footer.titulo2,
      desc2: footer.desc2,
      desc2_2: footer.desc2_2,
      desc2_3: footer.desc2_3,
      desc2_4: footer.desc2_4,
  
      titulo3: footer.titulo3,
      desc3: footer.desc3,
      desc3_2: footer.desc3_2,
      desc3_3: footer.desc3_3
    });
  }

  updateFooter(footer: Footer) {
    this.footerList.update(footer.$keyRegistro, {
      titulo1: footer.titulo1,
      desc1: footer.desc1,
      desc1_2: footer.desc1_2,
      desc1_3: footer.desc1_3,
      desc1_4: footer.desc1_4,
  
      titulo2: footer.titulo2,
      desc2: footer.desc2,
      desc2_2: footer.desc2_2,
      desc2_3: footer.desc2_3,
      desc2_4: footer.desc2_4,
  
      titulo3: footer.titulo3,
      desc3: footer.desc3,
      desc3_2: footer.desc3_2,
      desc3_3: footer.desc3_3
    });
  }

}
