import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', url: '/subestacoes' },
      { label: 'Subestação' },
    ];
  }
}
