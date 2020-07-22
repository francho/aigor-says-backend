import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {PagesModule} from "./pages/pages.module";
import {UiModule} from "./ui/ui.module";
import {AppConfig} from "./app.config";

function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'aigor-says-webapp'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '**', redirectTo: '/', pathMatch: 'full'}
    ]),
    UiModule,
    PagesModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
