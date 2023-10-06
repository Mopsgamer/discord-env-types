import { UnknownMethod, UnknownMethodAsync } from "../custom";

export interface DiscordHTTP {
  getAPIEndpoint: UnknownMethodAsync<string>;
  makeChunkedRequest: UnknownMethod;
}
