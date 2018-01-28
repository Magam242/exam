import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  contacts: Model.Contacts[];
  activ: boolean;

  constructor() { }

  ngOnInit() {
    this.activ = false;
    this.contacts = [
      {
        id: 1,
        fullname: 'Petrov Peta',
        address: 'Celinogradscay 40',
        tel: '99999999999',
        email: 'peta@gmail.com'
      },
      {
        id: 2,
        fullname: 'Petrov Peta',
        address: 'Celinogradscay 40',
        tel: '99999999999',
        email: 'peta@gmail.com'
      },
      {
        id: 3,
        fullname: 'Petrov Peta',
        address: 'Celinogradscay 40',
        tel: '99999999999',
        email: 'peta@gmail.com'
      }
    ];
  }

  filter() {
    this.activ = !this.activ;
  }
}
