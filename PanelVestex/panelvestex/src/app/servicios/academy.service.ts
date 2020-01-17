import { Injectable } from '@angular/core';
import { Academy } from '../modelo/academy';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  selectedAcademy: Academy = new Academy();
  academyList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getAcademy() {
    return this.academyList = this.firebase.list('academy');
  }

  // insertAcademy(academy: Academy) {
  //   this.academyList.push({

  //       titulo: academy.titulo,

  //       parte2_titulo: academy.parte2_titulo,
  //       parte2: academy.parte2,
    
  //       parte2_2: academy.parte2_2,
  //       parte2_2_2: academy.parte2_2_2,
    
  //       parte3_titulo: academy.parte3_titulo,
  //       parte3: academy.parte3,
  //       parte3_3: academy.parte3_3,
  //       parte3_3_3: academy.parte3_3_3,
    
  //       parte4_titulo: academy.parte4_titulo,
  //       parte4: academy.parte4,
  //       parte4_4: academy.parte4_4,
  //       parte4_4_4: academy.parte4_4_4,
    
  //       parte5_titulo: academy.parte5_titulo,
  //       parte5: academy.parte5,
  //       parte5_5: academy.parte5_5,
  //       parte5_5_5: academy.parte5_5_5,
  //       parte5_5_5_5: academy.parte5_5_5_5,
  //       parte5_5_5_5_5: academy.parte5_5_5_5_5,
    
  //       parte6_titulo: academy.parte6_titulo,
  //       parte6: academy.parte6,
    
  //       parte7_titulo: academy.parte7_titulo,
  //       parte7: academy.parte7,
  //       parte7_7: academy.parte7_7
  //   });
  // }

  updateAcademy(academy: Academy) {
    this.academyList.update(academy.$keyRegistro, {
        
        titulo: academy.titulo,

        boton: academy.boton,

        image1: academy.image1,
        image2: academy.image2,
        image3: academy.image3,
        image4: academy.image4,
        image5: academy.image5,
        image6: academy.image6,

        parte2_titulo: academy.parte2_titulo,
        parte2: academy.parte2,
    
        parte2_2: academy.parte2_2,
        parte2_2_2: academy.parte2_2_2,
    
        parte3_titulo: academy.parte3_titulo,
        parte3: academy.parte3,
        parte3_3: academy.parte3_3,
        parte3_3_3: academy.parte3_3_3,
    
        parte4_titulo: academy.parte4_titulo,
        parte4: academy.parte4,
        // parte4_4: academy.parte4_4,
        // parte4_4_4: academy.parte4_4_4,
    
        parte5_titulo: academy.parte5_titulo,
        parte5: academy.parte5,
        parte5_5: academy.parte5_5,
        parte5_5_5: academy.parte5_5_5,
        parte5_5_5_5: academy.parte5_5_5_5,
        parte5_5_5_5_5: academy.parte5_5_5_5_5,
    
        parte6_titulo: academy.parte6_titulo,
        parte6: academy.parte6,
    
        parte7_titulo: academy.parte7_titulo,
        parte7: academy.parte7,
        parte7_7: academy.parte7_7,

        titulo8: academy.titulo8
    });
  }

}
