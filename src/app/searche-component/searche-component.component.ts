import { Component, OnInit } from '@angular/core';
import {Products} from "../model/products";
import {Service} from "../service/service.service";

@Component({
  selector: 'app-searche-component',
  templateUrl: './searche-component.component.html',
  styleUrls: ['./searche-component.component.scss']
})
export class SearcheComponentComponent implements OnInit {

  constructor(private service:Service) { }
  produits!:Products
  productName!:string

  ngOnInit(): void {
   // this.produits = this.service.getAllProducts()
    this.productName = " "
    this.produits = this.produits
  }

  OnSearche(){
    this.produits = this.service.getProductToSearche(this.productName)
  }

}
