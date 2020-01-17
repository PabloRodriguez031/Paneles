import { Injectable } from '@angular/core';
import { Statistics } from '../modelo/statistics';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  selectedStatistics: Statistics = new Statistics();
  statisticsList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getStatistics() {
    return this.statisticsList = this.firebase.list('statistics_es');
  }

  // insertStatistics(statistics: Statistics) {
  //   this.statisticsList.push({

  //       titulo: statistics.titulo,

  //       parte2_titulo: statistics.parte2_titulo,
  //       parte2_subtitulo: statistics.parte2_subtitulo,
  //       parte2_desc: statistics.parte2_desc,

  //       parte3_titulo: statistics.parte3_titulo,
  //       parte3: statistics.parte3
        
  //   });
  // }
  
  updateStatistics(statistics: Statistics) {
    this.statisticsList.update(statistics.$keyRegistro, {
        titulo: statistics.titulo,

        image1: statistics.image1,
        image2: statistics.image2,
        image3: statistics.image3,
        image4: statistics.image4,
        image5: statistics.image5,

        parte2_titulo: statistics.parte2_titulo,
        parte2_subtitulo: statistics.parte2_subtitulo,
        parte2_desc: statistics.parte2_desc,

        parte3_titulo: statistics.parte3_titulo,
        parte3: statistics.parte3
    });
  }

}
