import {Component, OnInit} from '@angular/core';
import {AigorMessage} from "../../models/aigor-message";
import {AigorApiService} from "../../api/aigor-api.service";
import {AigorSaysApiServer} from "../../models/aigor-says-app-config";
import {AppConfig} from "../../app.config";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {
  model = new AigorMessage('');
  host: AigorSaysApiServer;

  constructor(private aigorApi: AigorApiService) {
    // TODO server selector
    this.host =  AppConfig.settings.apiServers[0];
  }

  ngOnInit() {
  }

  onTalk() {
    this.aigorApi.talk(this.host, this.model).subscribe( _=> this.model.phrase="");
  }
}
