import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  categories:string[] = ["Electronics","Grocery","Furniture","Clothing","Beauty"]
  status:string[] = ["In stock","Low stock","Out of stock"]

  constructor(private fb:FormBuilder, private router:Router,private route:ActivatedRoute, private http:SampleService){}
  selectedId!:any;
  viewProduct!:any;
  ngOnInit() {
    this.createForm();
    this.selectedId = this.route.snapshot.queryParamMap.get('id');
    console.log("received Id ",this.selectedId )

    this.viewProduct = this.route.snapshot.queryParamMap.get('productName');
    console.log(this.viewProduct)
    if(this.selectedId){
      this.editProductDetails();
    }else{
      this.ViewProductDetails();
    }
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
      "productImage" : [null]
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
    // var formData = new FormData();
    // formData.append('productImage',this.productForm1.value.productImage);
    if(this.selectedId == null){
      this.onSubmit();
    }else if(this.viewProduct && this.selectedId){
      this.ViewProductDetails();
    }else{
      this.updateSelectedProduct();
    }
  }

  onSubmit(){
    let productDetails = {
      ...this.productForm1.value,
      ...this.productForm2.value,
      ...this.productForm3.value,
      featured : this.isChecked
    };
    // formData.append('productDetails',JSON.stringify(productDetails))

    this.http.saveDataToServer('products',productDetails).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/product'])
    })
  }



  isChecked!:boolean;
  buttonState(state:any){
    this.isChecked = state.isTrusted;
    console.log(this.isChecked)
  }

  // dropzone
  files: File[] = [];
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const file : File = event.addedFiles[0];
    this.productForm1.patchValue({productImage : file})
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  // ------

  editProductDetails(){
    const endPoint = "products/" + this.selectedId
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
      console.log(response)
      this.productForm1.patchValue(response)
      this.productForm2.patchValue(response)
      // this.productForm3.patchValue(response)
      this.productForm3.patchValue({
        regularPrice: response.regularPrice,
        salePrice: response.salePrice,
        feature : response.feature
      });
      this.isChecked = response.featured;

    });
  }

  ViewProductDetails(){
    const endPoint = "products/" + this.selectedId
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{

      console.log(response)
      this.productForm1.patchValue(response)
      this.productForm2.patchValue(response)
      // this.productForm3.patchValue(response)

      // this.productForm2.patchValue({
      //   productCode: response.productCode,
      //   product_SKU: response.product_SKU,
      //   gender: response.gender,
      //   qunatity: response.qunatity
      // });

      this.productForm3.patchValue({
        regularPrice: response.regularPrice,
        salePrice: response.salePrice,
        feature : response.feature
      });
      this.isChecked = response.featured;

    //   this.productForm1.disable();
    // this.productForm2.disable();
    // this.productForm3.disable();

    });
  }

  updateSelectedProduct(){
    const endPoint = 'products/' + this.selectedId;
    const productForm = {
      ...this.productForm1.value,
      ...this.productForm2.value,
      ...this.productForm3.value,
      featured : this.isChecked
    }
    this.http.updateDataToServer(endPoint,productForm).subscribe((response:any)=>{
      console.log("edited data send ", response);
      this.router.navigate(['/product'])
    })
  }


}










// this.productForm1.patchValue({
//   productName: response.productName,
//   description: response.description,
//   category: response.category,
//   brand: response.brand,
//   status: response.status,
//   sizes: response.sizes,
//   colors: response.colors,
//   tags: response.tags,
//   productImage: null // Assuming you don't want to display the existing image
// });

// this.productForm2.patchValue({
//   productCode: response.productCode,
//   product_SKU: response.product_SKU,
//   gender: response.gender,
//   qunatity: response.qunatity
// });

// this.productForm3.patchValue({
//   regularPrice: response.regularPrice,
//   salePrice: response.salePrice
// });

// this.isChecked = response.featured;
// });
