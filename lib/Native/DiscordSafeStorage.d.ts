export interface DiscordSafeStorage {
  decryptString(text: string): string | null;
  encryptString(text: string): string | null;
  isEncryptionAvailable(text: string): boolean;
}
