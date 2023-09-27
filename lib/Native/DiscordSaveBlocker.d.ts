export interface DiscordSaveBlocker {
  blockDisplaySleep(): Promise<number>;
  cleanupDisplaySleep(): Promise<void>;
  unblockDisplaySleep(blocker: number): Promise<void>;
}
