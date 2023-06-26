import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SampleService } from 'src/app/sample.service'

interface User {
  User: string;
  Email: any;
  Phone: Number;
  Status: string;
  Joined: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  userlist:any[]=[];

  displayedColumns: string[] = ['User', 'Email', 'Phone', 'Status', 'Joined','Action'];
  dataSource :any= MatTableDataSource<any>;


  constructor(private http: SampleService) { }
  ngOnInit(): void {
    this.userlist=this.obj;
    this.dataSource=new MatTableDataSource(this.obj)
    // this.http.getDataFromServer('userList').subscribe(res=>{
    //   if (res && res.length > 0){
    //     console.log()
    //   }
    // })
  }
    obj = [
      { User: "Jhon", Email: "jhon@gmail.com", Phone: '8765435678', Status: "Active", Joined: '10/06/2023', },
      { User: "Joni", Email: "joni@gmail.com", Phone: '9843655678', Status: "Active", Joined: '10/06/2023', },
      { User: "Kayan", Email: "kk@gmail.com", Phone: '8743501378', Status: "Active", Joined: '10/06/2023', },
      { User: "Filisha", Email: "fflisha@gmail.com", Phone: '8760097432', Status: "Not verified", Joined: '10/06/2023', },
      { User: "Sloni", Email: "sloni@gmail.com", Phone: '8321568906', Status: "Active", Joined: '10/06/2023', },
      { User: "Sunny", Email: "sunny@gmail.com", Phone: '9753125374', Status: "Not verified", Joined: '10/06/2023', },
      { User: "Omii", Email: "omii@gmail.com", Phone: '7351428308', Status: "Active", Joined: '10/06/2023', },
      { User: "Jhon", Email: "jhon@gmail.com", Phone: '8765435678', Status: "Active", Joined: '10/06/2023', },
      { User: "Joni", Email: "joni@gmail.com", Phone: '9843655678', Status: "Active", Joined: '10/06/2023', },
      { User: "Kayan", Email: "kk@gmail.com", Phone: '8743501378', Status: "Active", Joined: '10/06/2023', },
      { User: "Filisha", Email: "fflisha@gmail.com", Phone: '8760097432', Status: "Not verified", Joined: '10/06/2023', },
      { User: "Sloni", Email: "sloni@gmail.com", Phone: '8321568906', Status: "Active", Joined: '10/06/2023', },
      { User: "Sunny", Email: "sunny@gmail.com", Phone: '9753125374', Status: "Not verified", Joined: '10/06/2023', },
      { User: "Omii", Email: "omii@gmail.com", Phone: '7351428308', Status: "Active", Joined: '10/06/2023', }
    ]



  }

  









