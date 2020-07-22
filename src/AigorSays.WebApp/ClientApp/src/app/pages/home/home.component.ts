import {Component} from '@angular/core';
import {AigorSaysApiServer} from "../../models/aigor-says-app-config";
import {AppConfig} from "../../app.config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public hosts:AigorSaysApiServer[] = AppConfig.settings.apiServers;
}
