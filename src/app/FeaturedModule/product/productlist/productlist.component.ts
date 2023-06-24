import { Component,OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SampleService } from '../../../sample.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {


  dataSource!: MatTableDataSource<any>;
  starRating:number = 5;
  isChecked:boolean = false;

  isLoaded:boolean = false;

  displayedColumns: any[] = [
    'productName',
    'created_at',
    'status',
    'rating',
    'regularPrice',
    'featured',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private http:SampleService,private router:Router){}

  ngOnInit() {
    this.isLoaded = true;
    this.http.getDataFromServer('/products').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      }
      this.isLoaded = false;
    },
    error => {
      this.isLoaded = false;
    })
  }

  // editProduct(product:any){
  //   console.log(product)
  //   this.router.navigate(['/product/addProduct'])

  // }
  deleteProduct(product:any){
    console.log(product)

  }
  viewProduct(product:any){
    this.router.navigate(['/product/addProduct'])
  }


}
