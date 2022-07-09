import { Component, ViewChild } from '@angular/core';
import { DataService } from './shared/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'; 
import { MatTableDataSource } from '@angular/material/table'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedItem:any;
  details:any = [];
  mockData:any;
  filteredData:any;

  constructor(private api:DataService){
  
  }

  ngOnInit(): void{
    this.api.getData().subscribe(res=>{
      this.mockData = res
      this.filteredData = this.mockData;
    })
  }

  filterItems() {
    this.filteredData = this.mockData.filter((item: any) => item.listName.toLowerCase().includes(this.selectedItem.toLowerCase()))
  }

  displayDetails(i:any){
    const res = this.mockData.filter((x:any)=> x.id == i);
    this.details.push(res)
  }

  
}
