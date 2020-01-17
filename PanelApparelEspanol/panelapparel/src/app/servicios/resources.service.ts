import { Injectable } from '@angular/core';
import { Resources } from '../modelo/resources';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  selectedResources: Resources = new Resources();
  resourcesList: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase) { }

  getResources() {
    return this.resourcesList = this.firebase.list('resources_es');
  }

  insertResources(resources: Resources) {
    this.resourcesList.push({
      titulo: resources.titulo,

      titulo_seccion1: resources.titulo_seccion1,
      descripcion_seccion1: resources.descripcion_seccion1,
      titulo_caja1_seccion1: resources.titulo_caja1_seccion1,
      descripcion_caja1_seccion1: resources.descripcion_caja1_seccion1,
      tipo_caja1_seccion1: resources.tipo_caja1_seccion1,
      titulo_caja2_seccion1: resources.titulo_caja2_seccion1,
      descripcion_caja2_seccion1: resources.descripcion_caja2_seccion1,
      tipo_caja2_seccion1: resources.tipo_caja2_seccion1,
  
      titulo_caja1_seccion2: resources.titulo_caja1_seccion2,
      descripcion_caja1_seccion2: resources.descripcion_caja1_seccion2,
      link_caja1_seccion2: resources.link_caja1_seccion2,
      titulo_caja2_seccion2: resources.titulo_caja2_seccion2,
      descripcion_caja2_seccion2: resources.descripcion_caja2_seccion2,
      link_caja2_seccion2: resources.link_caja2_seccion2,
      titulo_caja3_seccion2: resources.titulo_caja3_seccion2,
      descripcion_caja3_seccion2: resources.descripcion_caja3_seccion2,
  
      titulo_seccion3: resources.titulo_seccion3,
      descripcion_seccion3: resources.descripcion_seccion3,
      caja1_seccion3: resources.caja1_seccion3,
      boton_caja1_seccion3: resources.boton_caja1_seccion3,
      caja2_seccion3: resources.caja2_seccion3,
  
      titulo_caja1_seccion4: resources.titulo_caja1_seccion4,
      descripcion_caja1_seccion4: resources.descripcion_caja1_seccion4,
      link_caja1_seccion4: resources.link_caja1_seccion4,
      titulo_caja2_seccion4: resources.titulo_caja2_seccion4,
      descripcion_caja2_seccion4: resources.descripcion_caja2_seccion4,
      link_caja2_seccion4: resources.link_caja2_seccion4,
      titulo_caja3_seccion4: resources.titulo_caja3_seccion4,
      descripcion_caja3_seccion4: resources.descripcion_caja3_seccion4        
    });
  }

  updateResources(resources: Resources) {
    this.resourcesList.update(resources.$keyRegistro, {       
      titulo: resources.titulo,

      titulo_seccion1: resources.titulo_seccion1,
      descripcion_seccion1: resources.descripcion_seccion1,
      titulo_caja1_seccion1: resources.titulo_caja1_seccion1,
      descripcion_caja1_seccion1: resources.descripcion_caja1_seccion1,
      tipo_caja1_seccion1: resources.tipo_caja1_seccion1,
      titulo_caja2_seccion1: resources.titulo_caja2_seccion1,
      descripcion_caja2_seccion1: resources.descripcion_caja2_seccion1,
      tipo_caja2_seccion1: resources.tipo_caja2_seccion1,
  
      titulo_caja1_seccion2: resources.titulo_caja1_seccion2,
      descripcion_caja1_seccion2: resources.descripcion_caja1_seccion2,
      link_caja1_seccion2: resources.link_caja1_seccion2,
      titulo_caja2_seccion2: resources.titulo_caja2_seccion2,
      descripcion_caja2_seccion2: resources.descripcion_caja2_seccion2,
      link_caja2_seccion2: resources.link_caja2_seccion2,
      titulo_caja3_seccion2: resources.titulo_caja3_seccion2,
      descripcion_caja3_seccion2: resources.descripcion_caja3_seccion2,
  
      titulo_seccion3: resources.titulo_seccion3,
      descripcion_seccion3: resources.descripcion_seccion3,
      caja1_seccion3: resources.caja1_seccion3,
      boton_caja1_seccion3: resources.boton_caja1_seccion3,
      caja2_seccion3: resources.caja2_seccion3,
  
      titulo_caja1_seccion4: resources.titulo_caja1_seccion4,
      descripcion_caja1_seccion4: resources.descripcion_caja1_seccion4,
      link_caja1_seccion4: resources.link_caja1_seccion4,
      titulo_caja2_seccion4: resources.titulo_caja2_seccion4,
      descripcion_caja2_seccion4: resources.descripcion_caja2_seccion4,
      link_caja2_seccion4: resources.link_caja2_seccion4,
      titulo_caja3_seccion4: resources.titulo_caja3_seccion4,
      descripcion_caja3_seccion4: resources.descripcion_caja3_seccion4,
      
      image1: resources.image1,
      image2: resources.image2,
      image3: resources.image3,
      image4: resources.image4,
      image5: resources.image5,
      image6: resources.image6,
      image7: resources.image7,
      image8: resources.image8,

      file: resources.file,
      file2: resources.file2,
      file3: resources.file3,
      file4: resources.file4,
      file5: resources.file5
    });
  }

}
