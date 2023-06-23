import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from 'src/app/sample.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent {
  productForm1!:FormGroup;
  productForm2!:FormGroup;
  productForm3!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private http:SampleService){}

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
    let productDetails = {
     pName : this.productForm1.value.productName,
     status : this.productForm1.value.status,
     price : this.productForm3.value.regularPrice
    };
    this.http.saveDataToServer('/products',productDetails).subscribe((res:any)=>{
      console.log(res);
    })
    this.router.navigate(['/product'])

  }

  categories:string[] = ["Electronics","Grocery","Furniture","Clothing","Beauty"]
  status:string[] = ["In stock","Low stock","Out of stock"]



  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
