import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../../modelo/statistics';
import { StatisticsService } from '../../../servicios/statistics.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-statisticslist',
  templateUrl: './statisticslist.component.html',
  styleUrls: ['./statisticslist.component.css']
})
export class StatisticslistComponent implements OnInit {

  statisticsList: Statistics[];

  mostrarForm = false;

  constructor(public statisticsService: StatisticsService) { }

  ngOnInit() {
    this.MostrarStatistics();
  }



  MostrarStatistics() {
    this.statisticsService.getStatistics().snapshotChanges().subscribe(item => {
      this.statisticsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.statisticsList.push(x as Statistics);
      });
    });
  }


  onEdit(statistics: Statistics) {
    this.mostrarForm = true;
    this.statisticsService.selectedStatistics = statistics;
  }

}
