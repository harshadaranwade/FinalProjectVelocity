import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-sub-categorylist',
  templateUrl: './sub-categorylist.component.html',
  styleUrls: ['./sub-categorylist.component.scss']
})
export class SubCategorylistComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    displayedColumns: any[] = ["category","description","Total_items","CreatedAt","Actions"];
    // FindIndex!:any;
    dataSource!:MatTableDataSource<any>;
    // todaysDate = new Date();

    // data:any[]=[];
    constructor(private http:HttpService,private router:Router) {}
  
    ngOnInit()
     {
      this.getDatalist();
     }
    
     getDatalist(){
    this.http.getData('subcategory').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.dataSource = new MatTableDataSource(response);
        // console.log(response);

  //   this.http.getData("products").subscribe((res: any) => 
  //  {
  //    this.dataSource = new MatTableDataSource(res);
  //    // console.log(res);
     console.log("data Fetched sucessfully");
     this.dataSource.paginator = this.paginator;}
      }
    )}
     
    OnDelete(rowData: any,index:number) 
    {
      if (confirm("Do you really want to delete")){

       
      const url='subcategory/'+rowData.id;
      this.http.deleteData(url).subscribe((resp:any)=>{
        this.dataSource.data.splice(index,1);
        this.dataSource._updateChangeSubscription();
  
      });
    }else{}
    
        
      }
     
       // console.log(rowData);
     
     
}
       
  
  // export interface CategoryData{
  //   Category:string,
  //   Description:string ,
  //   parent_category:string,
  // }

