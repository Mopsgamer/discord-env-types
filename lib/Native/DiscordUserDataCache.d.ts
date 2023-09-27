import { UnknownMethod, UnknownMethodAsync } from "../usable";

export interface DiscordUserDataCache {
  getCached: UnknownMethodAsync;
  cacheUserData: UnknownMethodAsync;
  deleteCache: UnknownMethod<void>;
}
