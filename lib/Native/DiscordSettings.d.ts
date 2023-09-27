export interface DiscordSettings {
  get(key: unknown): unknown;
  getSync(key: unknown): unknown;
  set(key: unknown, value: unknown): unknown;
}
