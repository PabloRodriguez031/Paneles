import { Injectable } from '@angular/core';
import { Funtejer } from '../modelo/funtejer';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FuntejerService {

  selectedFuntejer: Funtejer = new Funtejer();
  funtejerList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getFuntejer() {
    return this.funtejerList = this.firebase.list('funtejer');
  }

  // insertFuntejer(funtejer: Funtejer) {
  //   this.funtejerList.push({
  //       titulo: funtejer.titulo,
  //       desc: funtejer.desc,
  //       lista_1: funtejer.lista_1,
  //       lista_2: funtejer.lista_2,
  //       lista_3: funtejer.lista_3,
  //       lista_4: funtejer.lista_4,
  //       desc_2:funtejer.desc_2,
  //       boton: funtejer.boton        
  //   });
  // }

  updateFuntejer(funtejer: Funtejer) {
    this.funtejerList.update(funtejer.$keyRegistro, {        
        titulo: funtejer.titulo,
        image1: funtejer.image1,
        image2: funtejer.image2,
        desc: funtejer.desc,
        lista_1: funtejer.lista_1,
        lista_2: funtejer.lista_2,
        lista_3: funtejer.lista_3,
        lista_4: funtejer.lista_4,
        desc_2:funtejer.desc_2,
        boton: funtejer.boton,
        titulo_principal: funtejer.titulo_principal
    });
  }

}
