import type Electron from "electron";
import { UnknownMethodAsync, UnknownMethod, FileReadInfo } from "../usable";
import type path from "path";

export interface DiscordFileManager {
  basename: typeof path.basename;
  cleanupTempFiles: UnknownMethodAsync<{ callscopeLogFiles: unknown[] }>;
  combineWebRtcLogs: UnknownMethodAsync;
  dirname: typeof path.dirname;
  extname: typeof path.extname;
  getCallscopeLogFiles(blindChannelId: string | number): Promise<unknown[]>;
  getModuleDataPathSync: UnknownMethod<string>;
  getModulePath: UnknownMethodAsync<string>;
  join: typeof path.join;
  openFiles(options: Electron.OpenDialogOptions): Promise<FileReadInfo[]>;
  readLogFiles(): Promise<FileReadInfo[]>;
  saveWithDialog(
    content: string,
    filename: string,
    path: string,
  ): Promise<void>;
  showItemInFolder: UnknownMethodAsync<void>;
  showOpenDialog(options: Electron.OpenDialogOptions): Promise<string[]>;
  uploadDiscordHookCrashes(): Promise<unknown[]>;
}
