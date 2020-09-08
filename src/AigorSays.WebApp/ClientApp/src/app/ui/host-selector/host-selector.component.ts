import { Component, OnInit } from '@angular/core';
import {AigorSaysApiServer} from "../../models/aigor-says-app-config";
import {AppConfig} from "../../app.config";
import {AigorApiService} from "../../api/aigor-api.service";

const STATUS_RETRY_MS = 60 * 1000

@Component({
  selector: 'app-host-selector',
  templateUrl: './host-selector.component.html',
  styleUrls: ['./host-selector.component.css']
})

export class HostSelectorComponent implements OnInit {

  public hosts:AigorSaysApiServer[]=[];

  constructor(private aigorApiService: AigorApiService) { }

  ngOnInit(): void {
    this.hosts = AppConfig.settings.apiServers;
    this.refreshHostStatus();
  }

  private refreshHostStatus() {
    console.log('refresh hosts status');
    for (let i = 0; i < this.hosts.length; i++) {
       this.aigorApiService.isAlive(this.hosts[i]).subscribe(status => this.hosts[i].isAlive = status);
    }
    setTimeout(() => this.refreshHostStatus(), STATUS_RETRY_MS );
  }

}
