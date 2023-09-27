import { CrashInfo, UnknownMethod, UnknownMethodAsync } from "../usable";

export interface DiscordProcessUtils {
  flushCookies(cb: UnknownMethod): Promise<void>;
  flushDNSCache(): Promise<void>;
  flushStorageData(cb: UnknownMethod): Promise<void>;
  getCPUCoreCount(): number;
  getCurrentCPUUsagePercent(): number;
  getLastCrash(): Promise<CrashInfo>;
  getMainArgvSync(): Promise<string[]>;
  getSystemInfo: UnknownMethodAsync;
  purgeMemory(): void;
  setCrashInformation(newInformation: unknown): void;
}
