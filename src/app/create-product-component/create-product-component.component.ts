import { Component, OnInit } from '@angular/core';
import {Service} from "../service/service.service";
import {Products} from "../model/products";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product-component',
  templateUrl: './create-product-component.component.html',
  styleUrls: ['./create-product-component.component.scss']
})
export class CreateProductComponentComponent implements OnInit {

  constructor(private service:Service , private route:Router) { }
  produit!:Products

  ngOnInit(): void {
    this.produit = new Products()
  }

  OnAddProduct(){
    this.service.getCreateProduct(this.produit)
    alert("Le produit a ete ajouter avec succes ")
    this.route.navigate([''])
  }
}
