import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {RouterModule} from "@angular/router";
import { HostSelectorComponent } from './host-selector/host-selector.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    NavMenuComponent,
    HostSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
    exports: [
        NavMenuComponent,
        HostSelectorComponent
    ]
})
export class UiModule { }
