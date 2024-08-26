import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    SearchComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],

  exports:[
    SearchComponent,
    TableComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
