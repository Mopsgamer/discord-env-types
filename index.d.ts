export * from "./lib";
import type {
  DiscordErrors as TDiscordErrors,
  DiscordNative as TDiscordNative,
  DiscordSentry as TDiscordSentry,
  DiscordVideo as TDiscordVideo,
  SentryHub,
  UnknownMethod,
} from "./lib";

declare global {
  const __DISCORD_WINDOW_ID: string;
  const __BILLING_STANDALONE__: boolean;
  const __OVERLAY__: boolean;
  const __SENTRY__: {
    globalEventProcessors: UnknownMethod[];
    hub: SentryHub;
    logger: {
      assert: UnknownMethod<void>;
      debug: UnknownMethod<void>;
      disable: UnknownMethod<void>;
      enable: UnknownMethod<void>;
      error: UnknownMethod<void>;
      info: UnknownMethod<void>;
      log: UnknownMethod<void>;
      trace: UnknownMethod<void>;
      warn: UnknownMethod<void>;
    };
  };
  const DiscordErrors: TDiscordErrors;
  const DiscordNative: TDiscordNative | undefined;
  const DiscordSentry: TDiscordSentry;
  const DiscordVideo: TDiscordVideo;
  interface Window {
    __DISCORD_WINDOW_ID: typeof __DISCORD_WINDOW_ID;
    __BILLING_STANDALONE__: typeof __BILLING_STANDALONE__;
    __OVERLAY__: typeof __OVERLAY__;
    __SENTRY__: typeof __SENTRY__;
    DiscordErrors: typeof DiscordErrors;
    DiscordNative: typeof DiscordNative;
    DiscordSentry: typeof DiscordSentry;
    DiscordVideo: typeof DiscordVideo;
  }
}
