import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ParentComponent]
})
export class ListViewModule { }
