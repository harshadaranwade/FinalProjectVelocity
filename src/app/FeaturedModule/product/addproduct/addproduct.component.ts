import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  productForm1!:FormGroup;
  productForm2!:FormGroup;
  productForm3!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.productForm1 = this.fb.group({
      "productName" : ['',Validators.required],
      "description" : ['',Validators.required],
      "category" : ['',Validators.required],  //dropdown
      "brand" : ['',Validators.required],
      "status" : ['',Validators.required],  //dropdown
      "sizes" : ['',Validators.required],
      "colors" : ['',Validators.required],
      "tags" : ['',Validators.required],
      "productImage" : ['']
    })

    this.productForm2 = this.fb.group({
      "productCode" : ['',Validators.required],
      "product_SKU" : ['',Validators.required],
      "gender" : ['',Validators.required],
      "qunatity" : ['',Validators.required]
    })

    this.productForm3 = this.fb.group({
      "regularPrice" : ['',Validators.required],
      "salePrice" : ['']
    })
  }

  createProduct(){
    console.log(this.productForm1.value)
    console.log(this.productForm2.value)
    console.log(this.productForm3.value)
  }

  categories:string[] = ["Electronics","Grocery","Furniture","Clothing","Beauty"]
  status:string[] = ["In stock","Low stock","Out of stock"]

  navigate(){
    this.router.navigate(['/product'])
  }

}
