import { Component, OnInit } from '@angular/core';
import {Service} from "../service/service.service";
import {Products} from "../model/products";

@Component({
  selector: 'app-acceuil-component',
  templateUrl: './acceuil-component.component.html',
  styleUrls: ['./acceuil-component.component.scss']
})
export class AcceuilComponentComponent implements OnInit {

  constructor(private service:Service) { }
  AllProduct!:Products[]

  ngOnInit(): void {
    this.AllProduct = this.service.getAllProducts()
  }

  OnDeleteProduct(prod:Products){
    let response = confirm("Voulez-vous vraiment supprimez ce produit ? ")
    if (response)
      this.service.geProductToDelete(prod)
    else
      alert("ce produit n'est pas supprimer")
  }

}
