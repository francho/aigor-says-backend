import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {RouterModule} from "@angular/router";
import { HostSelectorComponent } from './host-selector/host-selector.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    HostSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        NavMenuComponent,
        HostSelectorComponent
    ]
})
export class UiModule { }
