import { UnknownMethod, UnknownMethodAsync } from "../custom";

export interface DiscordUserDataCache {
  getCached: UnknownMethodAsync;
  cacheUserData: UnknownMethodAsync;
  deleteCache: UnknownMethod<void>;
}
