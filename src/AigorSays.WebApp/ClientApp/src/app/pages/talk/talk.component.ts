import {Component, OnInit} from '@angular/core';
import {AigorMessage} from "../../models/aigor-message";
import {AigorApiService} from "../../api/aigor-api.service";
import {AigorSaysApiServer} from "../../models/aigor-says-app-config";
import {AppConfig} from "../../app.config";
import {MatSnackBar } from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {
  model = new AigorMessage('');
  host: AigorSaysApiServer;

  constructor(private route: ActivatedRoute, private aigorApi: AigorApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      for (let apiServer of AppConfig.settings.apiServers) {
        if(id === apiServer.id) {
          this.host = apiServer;
        }
      }
    })
  }

  onTalk() {
    this.aigorApi.talk(this.host, this.model).subscribe( _=> {
      this.snackBar.open("Mensaje enviado", null, { duration: 5000 })
    });
  }
}
