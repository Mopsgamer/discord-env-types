import { UnknownMethod, UnknownMethodAsync } from "../usable";

export interface DiscordHTTP {
  getAPIEndpoint: UnknownMethodAsync<string>;
  makeChunkedRequest: UnknownMethod;
}
