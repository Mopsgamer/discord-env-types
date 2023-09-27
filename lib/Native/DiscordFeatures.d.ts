export interface DiscordFeatures {
  supports(feature?: unknown): boolean;
  declareSupported(feature?: unknown): void;
}
