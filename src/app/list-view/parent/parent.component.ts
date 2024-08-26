import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent  {

  searchQueryParent: string = '';

  onSearchParent (searchEventData: string) {
    this.searchQueryParent = searchEventData;
  }


}
