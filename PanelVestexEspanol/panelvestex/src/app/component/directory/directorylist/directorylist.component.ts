import { Component, OnInit } from '@angular/core';
import { Directory } from '../../../modelo/directory';
import { DirectoryService } from '../../../servicios/directory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directorylist',
  templateUrl: './directorylist.component.html',
  styleUrls: ['./directorylist.component.css']
})

export class DirectorylistComponent implements OnInit {

  directoryList: Directory[];

  mostrarForm = false;

  constructor(public directoryService: DirectoryService) { }

  ngOnInit() {
    this.MostrarDirectory();
  }



  MostrarDirectory() {
    this.directoryService.getDirectory().snapshotChanges().subscribe(item => {
      this.directoryList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.directoryList.push(x as Directory);
      });
    });
  }


  onEdit(directory: Directory) {
    this.mostrarForm = true;
    this.directoryService.selectedDirectory = directory;
  }

}




