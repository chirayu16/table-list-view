import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') inputElementRef!:ElementRef;

  searchQuery: string = '';

  onSearchQueryInput(event:Event) {
    const inputEl = event.target as HTMLInputElement;
    this.onSearch.emit(inputEl?.value);
  }

  ngOnInit(): void {
  }

}
