import type Electron from "electron";

export * from "./DiscordAccessibility";
export * from "./DiscordClipboard";
export * from "./DiscordClips";
export * from "./DiscordCrashReporter";
export * from "./DiscordFeatures";
export * from "./DiscordFileManager";
export * from "./DiscordGlobalOverlay";
export * from "./DiscordHTTP";
export * from "./DiscordNativeModules";
export * from "./DiscordPowerMonitor";
export * from "./DiscordProcessUtils";
export * from "./DiscordSafeStorage";
export * from "./DiscordSaveBlocker";
export * from "./DiscordSettings";
export * from "./DiscordSpellChecker";
export * from "./DiscordThumbar";
export * from "./DiscordWindow";

import { OSInfo, UnknownMethod, UnknownMethodAsync } from "../usable";
import { DiscordAccessibility as TDiscordAccessibility } from "./DiscordAccessibility";
import { DiscordClipboard as TDiscordClipboard } from "./DiscordClipboard";
import { DiscordClips as TDiscordClips } from "./DiscordClips";
import { DiscordCrashReporter as TDiscordCrashReporter } from "./DiscordCrashReporter";
import { DiscordFeatures as TDiscordFeatures } from "./DiscordFeatures";
import { DiscordFileManager as TDiscordFileManager } from "./DiscordFileManager";
import { DiscordGlobalOverlay as TDiscordGlobalOverlay } from "./DiscordGlobalOverlay";
import { DiscordHTTP as TDiscordHTTP } from "./DiscordHTTP";
import { DiscordNativeModules as TDiscordNativeModules } from "./DiscordNativeModules";
import { DiscordPowerMonitor as TDiscordPowerMonitor } from "./DiscordPowerMonitor";
import { DiscordProcessUtils as TDiscordProcessUtils } from "./DiscordProcessUtils";
import { DiscordSafeStorage as TDiscordSafeStorage } from "./DiscordSafeStorage";
import { DiscordSaveBlocker as TDiscordSaveBlocker } from "./DiscordSaveBlocker";
import { DiscordSettings as TDiscordSettings } from "./DiscordSettings";
import { DiscordSpellChecker as TDiscordSpellChecker } from "./DiscordSpellChecker";
import { DiscordThumbar as TDiscordThumbar } from "./DiscordThumbar";
import { DiscordUserDataCache as TDiscordUserDataCache } from "./DiscordUserDataCache";
import { DiscordWindow as TDiscordWindow } from "./DiscordWindow";

export interface DiscordNative {
  app: Electron.App;
  clipboard: TDiscordClipboard;
  isRenderer: boolean;
  nativeModules: TDiscordNativeModules;
  process: NodeJS.Process;
  os: OSInfo;
  ipc: {
    send: UnknownMethod;
    on: UnknownMethod;
    invoke: UnknownMethod;
  };
  gpuSettings: {
    getEnableHardwareAcceleration(): boolean;
    setEnableHardwareAcceleration(value: boolean): unknown;
  };
  window: TDiscordWindow;
  powerMonitor: TDiscordPowerMonitor;
  spellCheck: TDiscordSpellChecker;
  crashReporter: TDiscordCrashReporter;
  desktopCapture: {
    getDesktopCaptureSources: UnknownMethodAsync;
  };
  fileManager: TDiscordFileManager;
  clips: TDiscordClips;
  processUtils: TDiscordProcessUtils;
  powerSaveBlocker: TDiscordSaveBlocker;
  http: TDiscordHTTP;
  accessibility: TDiscordAccessibility;
  features: TDiscordFeatures;
  settings: TDiscordSettings;
  userDataCache: TDiscordUserDataCache;
  thumbar: TDiscordThumbar;
  safeStorage: TDiscordSafeStorage;
  globalOverlay: TDiscordGlobalOverlay;
  remoteApp: Electron.App;
  remotePowerMonitor: TDiscordPowerMonitor;
}
