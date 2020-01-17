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
      titulo: footer.titulo,
      descripcion: footer.descripcion,
      boton: footer.boton,
  
      titulo_caja1_seccion2: footer.titulo_caja1_seccion2,
      link1_caja1_seccion2: footer.link1_caja1_seccion2,
      link2_caja1_seccion2: footer.link2_caja1_seccion2,
  
      link1_caja2_seccion2: footer.link1_caja2_seccion2,
      link2_caja2_seccion2: footer.link2_caja2_seccion2,
      derechos_caja2_seccion2: footer.derechos_caja2_seccion2,
      descripcion_caja2_seccion2: footer.descripcion_caja2_seccion2,
  
      contacto_caja3_seccion2: footer.contacto_caja3_seccion2,
      numero_caja3_seccion2: footer.numero_caja3_seccion2,
      correo_caja3_seccion2: footer.correo_caja3_seccion2,
      email_caja3_seccion2: footer.email_caja3_seccion2
    });
  }

  updateFooter(footer: Footer) {
    this.footerList.update(footer.$keyRegistro, {
      titulo: footer.titulo,
      descripcion: footer.descripcion,
      boton: footer.boton,
  
      titulo_caja1_seccion2: footer.titulo_caja1_seccion2,
      link1_caja1_seccion2: footer.link1_caja1_seccion2,
      link2_caja1_seccion2: footer.link2_caja1_seccion2,
  
      link1_caja2_seccion2: footer.link1_caja2_seccion2,
      link2_caja2_seccion2: footer.link2_caja2_seccion2,
      derechos_caja2_seccion2: footer.derechos_caja2_seccion2,
      descripcion_caja2_seccion2: footer.descripcion_caja2_seccion2,
  
      contacto_caja3_seccion2: footer.contacto_caja3_seccion2,
      numero_caja3_seccion2: footer.numero_caja3_seccion2,
      correo_caja3_seccion2: footer.correo_caja3_seccion2,
      email_caja3_seccion2: footer.email_caja3_seccion2,

      image1: footer.image1,
      image2: footer.image2
    });
  }

}
