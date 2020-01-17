import { Component, OnInit } from '@angular/core';
import { Products } from '../../../modelo/products';
import { ProductsService } from '../../../servicios/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  productsList: Products[];

  mostrarForm = false;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.MostrarProducts();
  }



  MostrarProducts() {
    this.productsService.getProducts().snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$keyRegistro"] = element.key;
        this.productsList.push(x as Products);
      });
    });
  }


  onEdit(products: Products) {
    this.mostrarForm = true;
    this.productsService.selectedProducts = products;
  }

}
