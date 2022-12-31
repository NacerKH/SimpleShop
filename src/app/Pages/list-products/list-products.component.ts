import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productsList:Product[]=[];
  like:number=0;


  constructor(private _productservice:ProductsServiceService ) { }

  ngOnInit(): void {
    this._productservice.getProducts().subscribe((data)=>this.productsList=data)
  }
  addToCart(product:Product){
    this._productservice.addToCart(product).subscribe(()=>Swal.fire('successfully!', 'Product  added  to cart successfully.', 'success'),()=>Swal.fire(' was Added!', 'Exist in Cart ', 'error'))
  }
  counterLike(product:Product){

if( product.like  != undefined || product.like != NaN) {
  product.like++
}else{

  product.like =    this.like++
}


    console.log(product)
   return  this._productservice.updateProduct(product).subscribe(()=>  Swal.fire('Cancelled!', 'Product updated successfully.', 'success'))
  }
  removeProduct(product:Product){
    this._productservice.deleteProduct(product).subscribe( ()=>  {

      this._productservice.getProducts().subscribe((data)=>this.productsList=data)
     Swal.fire('Removed!', 'Product removed successfully.', 'success')

    })
  }
}
