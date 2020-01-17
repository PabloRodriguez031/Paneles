import { Injectable } from '@angular/core';
import { Directory } from '../modelo/directory';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  selectedDirectory: Directory = new Directory();
  directoryList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getDirectory() {
    return this.directoryList = this.firebase.list('directory');
  }

  insertDirectory(directory: Directory) {
    this.directoryList.push({
      titulo: directory.titulo,
      categoria: directory.categoria

    });
  }

  updateDirectory(directory: Directory) {
    this.directoryList.update(directory.$keyRegistro, {        
      titulo: directory.titulo,
      categoria: directory.categoria
    });
  }
}


