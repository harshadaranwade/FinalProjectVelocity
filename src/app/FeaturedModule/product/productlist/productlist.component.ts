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


  dataSource!:any;
  starRating:number = 5;

  isChecked:boolean = true;

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
  deleteProduct(row:any,index:any){
    const url = '/products/' + row.id;
    this.http.deleteDataFromServer(url).subscribe((response: any) => {
      const data = this.dataSource.data; // Get the underlying data array
      data.splice(index, 1); // Remove the item from the data array
      this.dataSource.data = data;
      this.dataSource._updateChangeSubscription(response);
    })

  }
  viewProduct(product:any){
    this.router.navigate(['/product/addProduct'])
    // this.router.navigate(['/product/addProduct'], { queryParams: { id: product.id } });

  }


}
