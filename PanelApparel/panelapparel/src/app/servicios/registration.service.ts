import { Injectable } from '@angular/core';
import { Registration } from '../modelo/registration';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  selectedRegistration: Registration = new Registration();
  registrationList: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase) { }

  getRegistration() {
    return this.registrationList = this.firebase.list('registration');
  }

  insertRegistration(registration: Registration) {
    this.registrationList.push({
      titulo: registration.titulo,

      titulo_seccion1: registration.titulo_seccion1,
      descripcion_seccion1: registration.descripcion_seccion1,
      link_seccion1: registration.link_seccion1,
  
      titulo_seccion2: registration.titulo_seccion2,
      descripcion_seccion2: registration.descripcion_seccion2,
      link_seccion2: registration.link_seccion2,
  
      titulo_seccion3: registration.titulo_seccion3,
      descripcion_seccion3: registration.descripcion_seccion3
    });
  }

  updateRegistration(registration: Registration) {
    this.registrationList.update(registration.$keyRegistro, { 
      titulo: registration.titulo,

      titulo_seccion1: registration.titulo_seccion1,
      descripcion_seccion1: registration.descripcion_seccion1,
      link_seccion1: registration.link_seccion1,
  
      titulo_seccion2: registration.titulo_seccion2,
      descripcion_seccion2: registration.descripcion_seccion2,
      link_seccion2: registration.link_seccion2,
  
      titulo_seccion3: registration.titulo_seccion3,
      descripcion_seccion3: registration.descripcion_seccion3,

      image1: registration.image1,
      image2: registration.image2,
      image3: registration.image3,

      link_path: registration.link_path,
      link_path2: registration.link_path2
    });
  }
}
