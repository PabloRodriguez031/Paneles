import { Injectable } from '@angular/core';
import { About } from '../modelo/about';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  selectedAbout: About = new About();
  aboutList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getAbout() {
    return this.aboutList = this.firebase.list('about_es');
  }

  updateAbout(about: About) {
    this.aboutList.update(about.$keyRegistro, {
      titulo: about.titulo,

      boton: about.boton,

      image1: about.image1,
      image2: about.image2,
      image3: about.image3,
      image4: about.image4,
      image5: about.image5,
      image6: about.image6,
      image7: about.image7,
      image8: about.image8,
      image9: about.image9,
      image10: about.image10,
      image11: about.image11,
      image12: about.image12,

      parte2_titulo: about.parte2_titulo,
  
      parte2_2_titulo: about.parte2_2_titulo, 
      parte2_2: about.parte2_2, 
  
      parte3_titulo: about.parte3_titulo, 
      parte3: about.parte3, 
  
      parte3_3_titulo: about.parte3_3_titulo, 
      parte3_3: about.parte3_3, 
  
      parte4_titulo: about.parte4_titulo, 
      parte4: about.parte4, 
  
      parte5_desc: about.parte5_desc, 
      parte5_titulo: about.parte5_titulo, 
  
      parte5_desc_2: about.parte5_desc_2, 
      parte5_titulo_2: about.parte5_titulo_2, 
  
      parte5_desc_3: about.parte5_desc_3, 
      parte5_titulo_3: about.parte5_titulo_3, 
  
      parte5_desc_4: about.parte5_desc_4, 
      parte5_titulo_4: about.parte5_titulo_4, 
  
      parte5_desc_5: about.parte5_desc_5, 
      parte5_titulo_5: about.parte5_titulo_5, 
  
      parte5_desc_6: about.parte5_desc_6, 
      parte5_titulo_6: about.parte5_titulo_6, 
  
      parte5_desc_7: about.parte5_desc_7, 
      parte5_titulo_7: about.parte5_titulo_7, 
  
      parte5_desc_8: about.parte5_desc_8, 
      parte5_titulo_8: about.parte5_titulo_8, 
  
      parte5_desc_9: about.parte5_desc_9, 
      parte5_titulo_9: about.parte5_titulo_9 
    });
  }

}
