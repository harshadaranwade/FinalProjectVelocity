import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {MatCardModule} from '@angular/material/card';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

let materialModules=[
  MatButtonModule,
  MatSidenavModule,
  MatListModule,

  MatSlideToggleModule,
  MatIconModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  MatDialogModule,
MatTableModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[materialModules]
})
export class MaterialModule { }
