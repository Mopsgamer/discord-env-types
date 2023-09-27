import { UnknownMethod } from "../usable";

export interface DiscordWindow {
  USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
  blur(): Promise<void>;
  focus(): Promise<void>;
  close(): Promise<void>;
  flashFrame(): Promise<void>;
  fullscreen(): Promise<void>;
  isAlwaysOnTop(): Promise<boolean>;
  maximize(): Promise<void>;
  minimize(): Promise<void>;
  restore(): Promise<void>;
  setBackgroundThrottling: UnknownMethod<Promise<void>>;
  setContentProtection: UnknownMethod<Promise<void>>;
  setDevtoolsCallbacks: UnknownMethod<Promise<void>>;
  setProgressBar: UnknownMethod<Promise<void>>;
  setZoomFactor(percent: number): void;
  supportsContentProtection(): boolean;
}
