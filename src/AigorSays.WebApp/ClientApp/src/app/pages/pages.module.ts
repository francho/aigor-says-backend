import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {UiModule} from "../ui/ui.module";
import {TalkComponent} from './talk/talk.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    HomeComponent,
    TalkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'talk/:id', component: TalkComponent}
    ]),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ]
})
export class PagesModule {
}
