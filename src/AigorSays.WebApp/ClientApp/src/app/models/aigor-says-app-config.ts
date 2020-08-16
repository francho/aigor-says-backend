export interface AigorSaysApiServer {
  id: string,
  name: string;
  url: string;
  isAlive?: boolean;
}

export interface AigorSaysAppConfig {
  env: {
    name: string;
  };

  apiServers: AigorSaysApiServer[];
}
