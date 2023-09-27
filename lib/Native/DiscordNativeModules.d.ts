import { UnknownMethod } from "../usable";

export interface DiscordNativeModules {
  canBootstrapNewUpdater: boolean;
  ensureModule: UnknownMethod;
  requireModule: UnknownMethod;
}
