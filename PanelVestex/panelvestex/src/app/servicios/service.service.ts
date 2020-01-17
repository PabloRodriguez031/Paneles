import { Injectable } from '@angular/core';
import { Service } from '../modelo/service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedService: Service = new Service();
  serviceList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getService() {
    return this.serviceList = this.firebase.list('service');
  }

  // insertService(service: Service) {
  //   this.serviceList.push({

  //       titulo: service.titulo,

  //       parte2_titulo: service.parte2_titulo,
  //       parte2_2: service.parte2_2,
    
  //       parte3_titulo: service.parte3_titulo,
  //       parte3: service.parte3,
    
  //       parte3_3_titulo: service.parte3_3_titulo,
  //       parte3_3: service.parte3_3,
    
  //       parte3_3_3_titulo: service.parte3_3_3_titulo,
  //       parte3_3_3: service.parte3_3_3,
    
  //       parte3_3_3_3_titulo: service.parte3_3_3_3_titulo,
  //       parte3_3_3_3: service.parte3_3_3_3 
  //   });
  // }

  updateService(service: Service) {
    this.serviceList.update(service.$keyRegistro, {
        titulo: service.titulo,

        image1: service.image1,
        image2: service.image2,
        image3: service.image3,
        image4: service.image4,
        image5: service.image5,

        parte2_titulo: service.parte2_titulo,
        parte2_2: service.parte2_2,
    
        parte3_titulo: service.parte3_titulo,
        parte3: service.parte3,
    
        parte3_3_titulo: service.parte3_3_titulo,
        parte3_3: service.parte3_3,
    
        parte3_3_3_titulo: service.parte3_3_3_titulo,
        parte3_3_3: service.parte3_3_3,
    
        parte3_3_3_3_titulo: service.parte3_3_3_3_titulo,
        parte3_3_3_3: service.parte3_3_3_3,

        service1: service.service1,
        service2: service.service2,
        service3: service.service3,
        service4: service.service4,
        
        title_form: service.title_form
    });
  }

}
