import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productsList:Product[]=[]
  constructor(private _productservice:ProductsServiceService) { }

  ngOnInit(): void {
    this._productservice.getProducts().subscribe((data)=>this.productsList=data)
  }
  addToCart(product:Product){
    this._productservice.addToCart(product).subscribe(()=>{},()=>alert('Product already exist'))
  }
}
