export interface DiscordClipboard {
  copy(text?: string): void;
  copyImage(image?: Buffer): void;
  paste(): void;
  cut(): void;
  read(): string;
}
