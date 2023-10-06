import { UnknownMethod } from "../custom";

export interface DiscordPowerMonitor {
  getSystemIdleTimeMs(): Promise<number>;
  on: UnknownMethod;
  removeAllListeners(): void;
}
