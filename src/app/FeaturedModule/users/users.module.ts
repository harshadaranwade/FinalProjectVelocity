import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class UsersModule { }
