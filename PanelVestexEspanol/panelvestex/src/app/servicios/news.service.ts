import { Injectable } from '@angular/core';
import { News } from '../modelo/news';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  selectedNews: News = new News();
  newsList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getNews() {
    return this.newsList = this.firebase.list('news_es');
  }

  // insertNews(news: News) {
  //   this.newsList.push({

  //       titulo: news.titulo,

  //       parte2_titulo: news.parte2_titulo,
  //       parte2_titulo_2: news.parte2_titulo_2,
    
  //       parte3_titulo: news.parte3_titulo,
  //       parte3_titulo_2: news.parte3_titulo_2,
    
  //       parte4_titulo: news.parte4_titulo
        
  //   });
  // }

  updateNews(news: News) {
    this.newsList.update(news.$keyRegistro, {        
        titulo: news.titulo,

        image1: news.image1,

        parte2_titulo: news.parte2_titulo,
        parte2_titulo_2: news.parte2_titulo_2,
    
        parte3_titulo: news.parte3_titulo,
        parte3_titulo_2: news.parte3_titulo_2,
    
        parte4_titulo: news.parte4_titulo
    });
  }

}
