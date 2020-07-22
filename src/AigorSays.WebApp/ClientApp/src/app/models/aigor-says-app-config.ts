export interface AigorSaysApiServer {
  id: string,
  name: string;
  url: string;
}

export interface AigorSaysAppConfig {
  env: {
    name: string;
  };

  apiServers: AigorSaysApiServer[];
}
