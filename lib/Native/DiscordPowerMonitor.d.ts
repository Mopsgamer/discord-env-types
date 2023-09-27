import { UnknownMethod } from "../usable";

export interface DiscordPowerMonitor {
  getSystemIdleTimeMs(): Promise<number>;
  on: UnknownMethod;
  removeAllListeners(): void;
}
