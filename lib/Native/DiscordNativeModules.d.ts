import { UnknownMethod } from "../custom";

export interface DiscordNativeModules {
  canBootstrapNewUpdater: boolean;
  ensureModule: UnknownMethod;
  requireModule: UnknownMethod;
}
