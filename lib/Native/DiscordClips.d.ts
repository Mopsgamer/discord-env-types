export interface DiscordClips {
  loadClip(path: string): Promise<unknown>;
  loadClipsDirectory(path: string): Promise<unknown[]>;
  deleteClip(path: string): Promise<void>;
  getClipProtocolURLFromPath(path: string): string;
}
