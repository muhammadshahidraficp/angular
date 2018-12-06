import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { } 

  item: object = {};
  itemList = [];
  showList: boolean = false;
  sortKey = 'description';
  sortDirection = "asc";
  
  ngOnInit() {

   
  }

  addItem(){
    this.showList = false;
    this.itemList.push(this.item)
    this.item = {};
    setTimeout(()=>{this.showList = true;},100)
    
  }

  removeItem(i){
this.itemList.splice(i,1);
  }

}
