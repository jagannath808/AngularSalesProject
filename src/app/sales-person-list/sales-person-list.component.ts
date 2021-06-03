import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }
   salesPersonList : SalesPerson [] = [
     new SalesPerson("Jagannath ","Kundu","Ja@ga",4000),
     new SalesPerson("AdiPriya ","Kundu","priya@ga",4000),
     new SalesPerson("AditiKundu ","Kundu","aditi@ga",7000),
     new SalesPerson("Bratati ","Kundu","Bratati@ga",4000),
     new SalesPerson("Shruti ","Kundu","Shruti@ga",6000)
   ]
  ngOnInit(): void {
  }

}
