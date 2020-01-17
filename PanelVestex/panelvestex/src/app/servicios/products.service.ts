import { Injectable } from '@angular/core';
import { Products } from '../modelo/products';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedProducts: Products = new Products();
  productsList: AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase) { }

  getProducts() {
    return this.productsList = this.firebase.list('products');
  }

    insertProducts(products: Products) {
    // this.productsList.push({

    //     titulo: products.titulo,
  
    //     parte2_2_titulo: products.parte2_2_titulo,
    //     parte2_2: products.parte2_2,

    //     parte2_boton: products.parte2_boton,

    //     parte5_desc: products.parte5_desc,
    //     parte5_titulo: products.parte5_titulo,

    //     parte5_desc_2: products.parte5_desc_2,
    //     parte5_titulo_2: products.parte5_titulo_2,

    //     parte5_desc_3: products.parte5_desc_3,
    //     parte5_titulo_3: products.parte5_titulo_3,

    //     parte5_desc_4: products.parte5_desc_4,
    //     parte5_titulo_4: products.parte5_titulo_4,

    //     parte5_desc_5: products.parte5_desc_5,
    //     parte5_titulo_5: products.parte5_titulo_5,

    //     parte5_desc_6: products.parte5_desc_6,
    //     parte5_titulo_6: products.parte5_titulo_6,

    //     parte5_desc_7: products.parte5_desc_7,
    //     parte5_titulo_7: products.parte5_titulo_7,

    //     parte5_desc_8: products.parte5_desc_8,
    //     parte5_titulo_8: products.parte5_titulo_8,

    //     parte5_desc_9: products.parte5_desc_9,
    //     parte5_titulo_9: products.parte5_titulo_9
    // });
  }

  updateProducts(products: Products) {
    this.productsList.update(products.$keyRegistro, {
        titulo: products.titulo,
  
        image1: products.image1,
        image2: products.image2,
        image3: products.image3,
        image4: products.image4,
        image5: products.image5,
        image6: products.image6,
        image7: products.image7,
        image8: products.image8,
        image9: products.image9,
        image10: products.image10,
        image11: products.image11,

        parte2_2_titulo: products.parte2_2_titulo,
        parte2_2: products.parte2_2,

        parte2_boton: products.parte2_boton,

        parte5_desc: products.parte5_desc,
        parte5_titulo: products.parte5_titulo,

        parte5_desc_2: products.parte5_desc_2,
        parte5_titulo_2: products.parte5_titulo_2,

        parte5_desc_3: products.parte5_desc_3,
        parte5_titulo_3: products.parte5_titulo_3,

        parte5_desc_4: products.parte5_desc_4,
        parte5_titulo_4: products.parte5_titulo_4,

        parte5_desc_5: products.parte5_desc_5,
        parte5_titulo_5: products.parte5_titulo_5,

        parte5_desc_6: products.parte5_desc_6,
        parte5_titulo_6: products.parte5_titulo_6,

        parte5_desc_7: products.parte5_desc_7,
        parte5_titulo_7: products.parte5_titulo_7,

        parte5_desc_8: products.parte5_desc_8,
        parte5_titulo_8: products.parte5_titulo_8,

        parte5_desc_9: products.parte5_desc_9,
        parte5_titulo_9: products.parte5_titulo_9
    });
  }

}
