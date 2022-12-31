import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/Product';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product=new Product();
  constructor(private _serviceProduct: ProductsServiceService,   private router: Router  ) { }

  ngOnInit(): void {

  }
  add(){
    this._serviceProduct.addProduct(this.product).subscribe(()=>{
      this.router.navigate(['']),
      Swal.fire('successfully!', 'Product  added   successfully.', 'success')

    }

)
  }
}
