import { Injectable } from '@angular/core';
import { Home } from '../modelo/home';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  selectedHome: Home = new Home();
  homeList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getHome() {
    return this.homeList = this.firebase.list('home_es');
  }

  // insertHome(home: Home) {
  //   this.homeList.push({
  //       parte1_titulo: home.parte1_titulo,
  //       parte1: home.parte1,

  //       parte2_titulo: home.parte2_titulo,
  //       parte2: home.parte2,

  //       parte2_2_titulo: home.parte2_2_titulo,
  //       parte2_2: home.parte2_2,

  //       parte2_2_2_titulo: home.parte2_2_2_titulo,
  //       parte2_2_2: home.parte2_2_2,

  //       parte3_titulo: home.parte3_titulo,
  //       parte3: home.parte3,

  //       parte3_3_titulo: home.parte3_3_titulo,
  //       parte3_3: home.parte3_3,

  //       parte3_3_3_titulo: home.parte3_3_3_titulo,
  //       parte3_3_3: home.parte3_3_3,

  //       parte3_3_3_3_titulo: home.parte3_3_3_3_titulo,
  //       parte3_3_3_3: home.parte3_3_3_3,

  //       parte3_3_3_3_3_titulo: home.parte3_3_3_3_3_titulo,
  //       parte3_3_3_3_3: home.parte3_3_3_3_3,

  //       parte4_titulo: home.parte4_titulo,
  //       parte4: home.parte4,

  //       parte4_4_titulo: home.parte4_4_titulo,
  //       parte4_4: home.parte4_4,

  //       parte4_4_4_titulo: home.parte4_4_4_titulo,
  //       parte4_4_4: home.parte4_4_4,

  //       parte4_4_4_4_titulo: home.parte4_4_4_4_titulo,
  //       parte4_4_4_4: home.parte4_4_4_4,

  //       parte5_titulo: home.parte5_titulo,
  //       parte5_subtitulo: home.parte5_subtitulo,
  //       parte5: home.parte5,

  //       parte6: home.parte6
  //   });
  // }

  updateHome(home: Home) {
    this.homeList.update(home.$keyRegistro, {
        titulo: home.titulo,

        boton: home.boton,
        boton2: home.boton2,
        boton3: home.boton3,
        boton4: home.boton4,

        image1: home.image1,
        image2: home.image2,
        image3: home.image3,
        image4: home.image4,
        image5: home.image5,
        image6: home.image6,

        parte1_titulo: home.parte1_titulo,
        parte1: home.parte1,

        parte2_titulo: home.parte2_titulo,
        parte2: home.parte2,

        parte2_2_titulo: home.parte2_2_titulo,
        parte2_2: home.parte2_2,

        parte2_2_2_titulo: home.parte2_2_2_titulo,
        parte2_2_2: home.parte2_2_2,

        parte3_titulo: home.parte3_titulo,
        parte3: home.parte3,

        parte3_3_titulo: home.parte3_3_titulo,
        parte3_3: home.parte3_3,

        parte3_3_3_titulo: home.parte3_3_3_titulo,
        parte3_3_3: home.parte3_3_3,

        parte3_3_3_3_titulo: home.parte3_3_3_3_titulo,
        parte3_3_3_3: home.parte3_3_3_3,

        parte3_3_3_3_3_titulo: home.parte3_3_3_3_3_titulo,
        parte3_3_3_3_3: home.parte3_3_3_3_3,

        parte4_titulo: home.parte4_titulo,
        parte4: home.parte4,

        parte4_4_titulo: home.parte4_4_titulo,
        parte4_4: home.parte4_4,

        parte4_4_4_titulo: home.parte4_4_4_titulo,
        parte4_4_4: home.parte4_4_4,

        parte4_4_4_4_titulo: home.parte4_4_4_4_titulo,
        parte4_4_4_4: home.parte4_4_4_4,

        parte5_titulo: home.parte5_titulo,
        parte5_subtitulo: home.parte5_subtitulo,
        parte5: home.parte5,

        parte6: home.parte6,

        titulo7: home.titulo7
    });
  }

  // deleteHome($keyRegistro: string) {
  //   this.homeList.remove($keyRegistro);
  // }


}
