import { Component, OnInit } from '@angular/core';
import { CompItem } from './components/overlay/comp-item';
import { Store } from '@ngrx/store';
import { getToggle } from './components/side-list/side-list.reducer';
import { SideList } from './components/side-list/side-list.model';
import { ISideList } from './components/side-list/i-side-list';
import { Observable } from 'rxjs';
import { ToggleDrawer } from './components/side-list/side-list.actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'svgdad-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comps: CompItem[];
  showLeftSidebar;
  cartSizeValue:number = 0;
  constructor( public store:Store<SideList>) {}

  
  ngOnInit() {}

  sidebarToggle() {
    this.showLeftSidebar = this.showLeftSidebar ? false : true;
  }
  sideListToggle() {
    this.store.dispatch(new ToggleDrawer());
  }
  cartSize(val) {
    this.cartSizeValue = val.value;
    console.log(val)
  }
}
