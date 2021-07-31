import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const materialModules: any[] = [
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
