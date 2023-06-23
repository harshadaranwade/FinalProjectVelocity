import { Component,OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { SharedService } from 'src/app/shared.service';

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  // constructor(private http:SharedService) {}

  ngOnInit() {
    // this.isLoaded = true;
    // this.http.getDataFromServer('/products').subscribe((response:any)=>{
    //   if(response && response.length > 0){
    //     this.dataSource = new MatTableDataSource(response);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort
    //   }
    //   this.isLoaded = false;
    // },
    // error => {
    //   this.isLoaded = false;
    // })
  }


  displayedColumns: any[] = [
    'product',
    'created_at',
    'status',
    'rating',
    'price',
    'featured',
    'actions',
  ];
}
