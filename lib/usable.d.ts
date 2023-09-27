export type UnknownMethod<ReturnType = unknown> = (
  ...args: unknown[]
) => ReturnType;
export type UnknownMethodAsync<ReturnType = unknown> = UnknownMethod<
  Promise<ReturnType>
>;

export type ReleaseChannel = "stable" | "canary" | "ptb";
/** @example "af" | "bg" | "ca" | "cs" | "cy" | "da" | "de" | "de-DE" | "el" | "en" | "en-AU" | "en-CA" | "en-GB" | "en-GB-oxendict" | "en-US" | "es" | "es-419" | "es-AR" | "es-ES" | "es-MX" | "es-US" | "et" | "fa" | "fo" | "fr" | "fr-FR" | "he" | "hi" | "hr" | "hu" | "hy" | "id" | "it" | "it-IT" | "ko" | "lt" | "lv" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "pt-PT" | "ro" | "ru" | "sh" | "sk" | "sl" | "sq" | "sr" | "sv" | "ta" | "tg" | "tr" | "uk" | "vi" */
export type AvailableDictionary = string;
export type DiscordLocaleKey =
  | "bg"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en-GB"
  | "en-US"
  | "es-ES"
  | "fi"
  | "fr"
  | "hi"
  | "hr"
  | "hu"
  | "it"
  | "ja"
  | "ko"
  | "lt"
  | "nl"
  | "no"
  | "pl"
  | "pt-BR"
  | "ro"
  | "ru"
  | "sv-SE"
  | "th"
  | "tr"
  | "uk"
  | "vi"
  | "zh-CN"
  | "zh-TW";
export type DiscordLocaleName =
  | "Bulgarian"
  | "Chinese Simplified"
  | "Chinese Traditional"
  | "Croatian"
  | "Czech"
  | "Danish"
  | "Dutch"
  | "English, United Kingdom"
  | "English, United States"
  | "Finnish"
  | "French"
  | "German"
  | "Greek"
  | "Hindi"
  | "Hungarian"
  | "Italian"
  | "Japanese"
  | "Korean"
  | "Lithuanian"
  | "Norwegian"
  | "Polish"
  | "Portuguese, Brazilian"
  | "Romanian"
  | "Russian"
  | "Spanish"
  | "Swedish"
  | "Thai"
  | "Turkish"
  | "Ukrainian"
  | "Vietnamese";

export interface OSInfo {
  appArch: NodeJS.Architecture;
  arch: NodeJS.Architecture;
  release: string;
}

export interface FileReadInfo {
  data: Uint8Array;
  filename: string;
}

export interface MemoryInfo {
  memoryUsageKB: number;
  uptimeSeconds: number;
  usedJSHeapSizeKB: number;
}

export interface MinidumpInfo {
  exceptionString: string;
  processName: string;
  exceptionModuleName: string;
  exceptionModuleVersion: string;
  relativeCrashAddress: string;
  exceptionModuleCodeId: unknown;
}

export interface CrashInfo {
  date: unknown | undefined;
  highestMemoryInformation: MemoryInfo;
  lastMemoryInformation: MemoryInfo;
  minidumpInformation: MinidumpInfo | null;
  id: unknown | undefined;
  rendererCrashReason: string | null;
  rendererCrashExitCode: number | null;
  storedInformation: unknown;
}
