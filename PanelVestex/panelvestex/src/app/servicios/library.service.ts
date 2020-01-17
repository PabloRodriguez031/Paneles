import { Injectable } from '@angular/core';
import { Library } from '../modelo/library';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  selectedLibrary: Library = new Library();
  libraryList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getLibrary() {
    return this.libraryList = this.firebase.list('library');
  }

  insertLibrary(library: Library) {
    this.libraryList.push({

      titulo: library.titulo,
      categoria: library.categoria

    });
  }

  updateLibrary(library: Library) {
    this.libraryList.update(library.$keyRegistro, {        
        
      titulo: library.titulo,
      categoria: library.categoria,

      vategoriax: library.categoriax

    });
  }
}


