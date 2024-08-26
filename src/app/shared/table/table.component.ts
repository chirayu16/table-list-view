import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeriodicElement } from './periodic-element.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',

})
export class TableComponent implements OnInit, OnChanges {
  @Input() searchQuery:string = '';

  dataSource: PeriodicElement[] = [];

  filteredDataSource: PeriodicElement[] = [];

  allElements: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  getValueString(element: PeriodicElement) {
    return element.name.toLowerCase() + element.position.toString().toLowerCase() + element.weight.toString().toLowerCase() + element.symbol.toLowerCase();
  };
  
  onSearchQueryChange (searchQuery: string) {
    this.filteredDataSource = this.dataSource.filter((item) => {
      let itemStringVal = this.getValueString(item);
      return itemStringVal.includes(searchQuery.toLowerCase());
    });
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchQuery']?.currentValue != null) {
      this.onSearchQueryChange(changes['searchQuery'].currentValue);
    }
  }

  ngOnInit(): void {
      this.filteredDataSource = this.allElements;
      this.dataSource = this.allElements; 
  }
}
