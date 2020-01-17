import { Component, OnInit } from '@angular/core';
import { News } from '../../../modelo/news';
import { NewsService } from '../../../servicios/news.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  newsList: News[];

  mostrarForm = false;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.MostrarNews();
  }



  MostrarNews() {
    this.newsService.getNews().snapshotChanges().subscribe(item => {
      this.newsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.newsList.push(x as News);
      });
    });
  }


  onEdit(news: News) {
    this.mostrarForm = true;
    this.newsService.selectedNews = news;
  }


}
