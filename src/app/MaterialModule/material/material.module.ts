import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
<<<<<<< HEAD
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
=======
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
>>>>>>> f022f8632359e2f5aca19eb50c795fbc4720e211
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

let materialModules=[
<<<<<<< HEAD
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatSidenavModule,
MatListModule,
MatExpansionModule,

//newsletter Module
MatFormFieldModule,
MatCardModule,
MatInputModule,
MatTableModule,
MatPaginatorModule,
MatDialogModule,
MatSortModule
=======
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
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
  MatDialogModule

>>>>>>> f022f8632359e2f5aca19eb50c795fbc4720e211

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
