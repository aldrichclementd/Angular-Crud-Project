import { Injectable, OnInit } from '@angular/core';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class Service {

  produits:Products[]=[
    {id:1,name:"Tomate",price:1500,dateCreation: new Date()},
    {id:2,name:"Piment",price:1400,dateCreation:new Date()},
    {id:3,name:"Cereale",price:1700,dateCreation:new Date()}
  ]
  getAllProducts():Products[]{
    return this.produits
  }
  getCreateProduct(produit:Products){
    if(produit != null){
      this.produits.push(produit)
    }
  }
  getOneProductById(idProduct:number):Products{
    const product = this.produits.find(p=>p.id == idProduct)
    if (product){
      return product
    }else {
      throw new Error("Erreur du id passer en parametre")
    }
  }
  getProductToUpdate(produits:Products){
    const product = this.produits.indexOf(produits)
    if (product){
       this.produits.splice(product,1,produits)
    }
  }
  geProductToDelete(productD:Products){
    const produit = this.produits.indexOf(productD)
    if (produit > -1)
      this.produits.splice(produit,1)
  }
  getProductToSearche(prod:string):Products{
    const produit = this.produits.find(p=>p.name == prod.trim())
    if (produit)
      return produit
    else
      throw new Error("Aucun produit trouver")

  }

}
