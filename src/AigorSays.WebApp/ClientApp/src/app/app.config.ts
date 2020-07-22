import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AigorSaysAppConfig} from "./models/aigor-says-app-config";
import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {
  static settings: AigorSaysAppConfig;
  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = `assets/config/${environment.config}`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response : AigorSaysAppConfig) => {
        AppConfig.settings = <AigorSaysAppConfig>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
