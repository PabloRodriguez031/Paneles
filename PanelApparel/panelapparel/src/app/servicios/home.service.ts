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
    return this.homeList = this.firebase.list('home');
  }

  insertHome(home: Home) {
    this.homeList.push({
        
        titulo: home.titulo,
        titulo_section1: home.titulo_section1,
        fecha_section1: home.fecha_section1,
        lugar_section1: home.lugar_section1,
        descripcion1_section1: home.descripcion1_section1,
        descripcion2_section1: home.descripcion2_section1,
        descripcion3_section1: home.descripcion3_section1,
    
        titulo_section2: home.titulo_section2,
        descripcion_section2: home.descripcion_section2,
        link_section2: home.link_section2,
    
        titulo_section3: home.titulo_section3,
        fecha1_section3: home.fecha1_section3,
        hora1_section3: home.hora1_section3,
        fecha2_section3: home.fecha2_section3,
        hora2_section3: home.hora2_section3,
        fecha3_section3: home.fecha3_section3,
        hora3_section3: home.hora3_section3,
    
        titulo_section4: home.titulo_section4,
        subtitulo_section4: home.subtitulo_section4,
        descripcion_section4: home.descripcion_section4,
        link_section4: home.link_section4
    });
  }

  updateHome(home: Home) {
    this.homeList.update(home.$keyRegistro, {
      titulo: home.titulo,
      titulo_section1: home.titulo_section1,
      fecha_section1: home.fecha_section1,
      lugar_section1: home.lugar_section1,
      descripcion1_section1: home.descripcion1_section1,
      descripcion2_section1: home.descripcion2_section1,
      descripcion3_section1: home.descripcion3_section1,
  
      titulo_section2: home.titulo_section2,
      descripcion_section2: home.descripcion_section2,
      link_section2: home.link_section2,
  
      titulo_section3: home.titulo_section3,
      fecha1_section3: home.fecha1_section3,
      hora1_section3: home.hora1_section3,
      fecha2_section3: home.fecha2_section3,
      hora2_section3: home.hora2_section3,
      fecha3_section3: home.fecha3_section3,
      hora3_section3: home.hora3_section3,
  
      titulo_section4: home.titulo_section4,
      subtitulo_section4: home.subtitulo_section4,
      descripcion_section4: home.descripcion_section4,
      link_section4: home.link_section4,

      image1: home.image1,
      image2: home.image2,
      image3: home.image3,
      image4: home.image4,
      image5: home.image5,
      image6: home.image6,
      image7: home.image7,
      image8: home.image8,

      file: home.file
    });
  }
}
