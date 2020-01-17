import { Injectable } from '@angular/core';
import { Show } from '../modelo/show';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  selectedShow: Show = new Show();
  showList: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase) { }

  getShow() {
    return this.showList = this.firebase.list('show_es');
  }

  insertShow(show: Show) {
    this.showList.push({

    titulo: show.titulo,

    titulo_seccion1: show.titulo_seccion1,
    titulo2_seccion1: show.titulo2_seccion1,
    subtitulo_seccion1: show.subtitulo_seccion1,
    descripcion_seccion1: show.descripcion_seccion1,
    contenido1_seccion1: show.contenido1_seccion1,
    numero1_seccion1: show.numero1_seccion1,
    contenido2_seccion1: show.contenido2_seccion1,
    numero2_seccion1: show.numero2_seccion1,

    titulo_seccion2: show.titulo_seccion2,
    descripcion_seccion2: show.descripcion_seccion2,

    titulo_seccion3: show.titulo_seccion3,
    boton1_seccion3: show.boton1_seccion3,
    boton2_seccion3: show.boton2_seccion3,
    boton3_seccion3: show.boton3_seccion3,

    titulo_seccion4: show.titulo_seccion4,
    description_seccion4: show.description_seccion4,
    link_seccion4: show.link_seccion4,
    informacion_seccion4: show.informacion_seccion4,
    caja1_seccion4: show.caja1_seccion4,
    caja2_seccion4: show.caja2_seccion4,

    titulo_seccion5: show.titulo_seccion5,
    descripcion_seccion5: show.descripcion_seccion5,
    boton_seccion5: show.boton_seccion5,
        
    });
  }

  updateShow(show: Show) {
    this.showList.update(show.$keyRegistro, { 
      titulo: show.titulo,

      titulo_seccion1: show.titulo_seccion1,
      titulo2_seccion1: show.titulo2_seccion1,
      subtitulo_seccion1: show.subtitulo_seccion1,
      descripcion_seccion1: show.descripcion_seccion1,
      contenido1_seccion1: show.contenido1_seccion1,
      numero1_seccion1: show.numero1_seccion1,
      contenido2_seccion1: show.contenido2_seccion1,
      numero2_seccion1: show.numero2_seccion1,

      titulo_seccion2: show.titulo_seccion2,
      descripcion_seccion2: show.descripcion_seccion2,

      titulo_seccion3: show.titulo_seccion3,
      boton1_seccion3: show.boton1_seccion3,
      boton2_seccion3: show.boton2_seccion3,
      boton3_seccion3: show.boton3_seccion3,

      titulo_seccion4: show.titulo_seccion4,
      description_seccion4: show.description_seccion4,
      link_seccion4: show.link_seccion4,
      informacion_seccion4: show.informacion_seccion4,
      caja1_seccion4: show.caja1_seccion4,
      caja2_seccion4: show.caja2_seccion4,

      titulo_seccion5: show.titulo_seccion5,
      descripcion_seccion5: show.descripcion_seccion5,
      boton_seccion5: show.boton_seccion5,

      image1: show.image1,
      image2: show.image2,
      image3: show.image3,
      image4: show.image4,
      image5: show.image5,
      image6: show.image6,
      image7: show.image7,
      image8: show.image8,

      file: show.file,
      file2: show.file2,
      file3: show.file3,
      file4: show.file4,
      file5: show.file5
    });
  }

}
