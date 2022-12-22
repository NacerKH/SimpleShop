import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  constructor(private _serviceProduct: ProductsServiceService) { }

  ngOnInit(): void {

  }
  add(){
    this._serviceProduct.addProduct(this.product).subscribe(()=>alert('Product Succefully added'))
  }
}
