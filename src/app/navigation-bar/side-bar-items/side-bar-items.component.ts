import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar-items',
  templateUrl: './side-bar-items.component.html',
  styleUrls: ['./side-bar-items.component.css']
})
export class SideBarItemsComponent implements OnInit {

  public items: object[];

  constructor() {
    this.items = [
      {
        name:'MainPage',
        path:'/'
      },
      {
        name:'Components',
        path:'components'
      },
      {
        name:'Forms',
        path:''
      }, {
        name:'Observables',
        path:''
      },
      {
        name:'Bootstrapping',
        path:''
      },
      {
        name:'NgModules',
        path:''
      },
      {
        name:'Dependency Injection',
        path:''
      },
      {
        name:'HTTP Client',
        path:''
      },
      {
        name:'Routing&Navigation',
        path:''
      },
      {
        name:'Animations',
        path:''
      }
    ];
  }

  ngOnInit() {
  }

}