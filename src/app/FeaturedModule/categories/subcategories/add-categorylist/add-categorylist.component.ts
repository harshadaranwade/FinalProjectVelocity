import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-add-categorylist',
  templateUrl: './add-categorylist.component.html',
  styleUrls: ['./add-categorylist.component.scss']
})
export class AddCategorylistComponent implements OnInit{


  formdata!: FormGroup;
  isUpdate: boolean=false;  
  categories: string[] = [];
  selectedId: string|null=null;
  constructor(private router: Router, private http: HttpService, private fb: FormBuilder,private route:ActivatedRoute) 
  {

  }
  ngOnInit() 
  {
    this.createForm();
    this.getParentcategory();
    this.selectedId = this.route.snapshot.queryParamMap.get('id');
    console.log("selected Id", this.selectedId);

    if (this.selectedId) {
      this.isUpdate = true;
      alert("Do you Want to Edit Category ");
      this.getListforUpdation();
    }
  }
     createForm(){
      this.formdata = this.fb.group(
        {
          "category": ['', [Validators.required]],
        "description": ['', [Validators.required]],
        "parent_category": ['', [Validators.required]],
        "image": ['', [Validators.required]]
        })
    
     }
  
     getListforUpdation() {
      const endpoint = "subcategory/" + this.selectedId;
      this.http.getData(endpoint).subscribe((res: any) => {
        //  console.log(res);
        this.formdata.patchValue(res);
  
      })
    }
  submit() {
    if (this.selectedId == null) {
      this.savedata();
    }
    else {
      this.updateData();
    }

    }
  
    savedata() {
      console.log(this.formdata.value);
  
        this.http.saveData("subcategory", this.formdata.value).subscribe((res: any) => {
          console.log(res);
          this.router.navigate(['/categories/sub_category']);
        },
         error => {
          
        })
  
      
    }
  
  
    updateData() {
      const endPoint = "subcategory/" + this.selectedId;
      console.log(this.selectedId)
      this.http.updateData(endPoint, this.formdata.value).subscribe((resp: any) => {
        // console.log(resp);
  
        this.router.navigate(['/categories/sub_category']);
      },
        error => {
          console.log("Category not getting updated");
        })
    }
    getParentcategory(){
      this.http.getData("category").subscribe((res:any)=>{
      console.log("get main cateries",res)
      res.filter((el:any)=>{
        this.categories.push(el.category)
        
      }) 
       
      })
  
    }
    

  
      // drag and drop
      
  //   files: File[] = [];
  // onSelect(event:any) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  //   const file : File = event.addedFiles[0];
  //   this.formdata.patchValue({Image : file})
  // }

  // onRemove(event:any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  }


    