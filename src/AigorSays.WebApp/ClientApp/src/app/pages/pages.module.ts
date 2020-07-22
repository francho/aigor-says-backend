import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {UiModule} from "../ui/ui.module";
import {TalkComponent} from './talk/talk.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


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
  ]
})
export class PagesModule {
}
