import { Component, OnInit } from '@angular/core';
import {Service} from "../service/service.service";
import {Products} from "../model/products";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-product-component',
  templateUrl: './update-product-component.component.html',
  styleUrls: ['./update-product-component.component.scss']
})
export class UpdateProductComponentComponent implements OnInit {

  constructor(private service:Service , private urlProduct:ActivatedRoute) {}
  produit!:Products
  url=+this.urlProduct.snapshot.params['id']
  ngOnInit(): void {
    this.produit = this.service.getOneProductById(this.url)
  }

  OnUpdateProduct(){
    this.service.getProductToUpdate(this.service.getOneProductById(this.url))
  }

}
