export * from "./lib";
import type {
  DiscordErrors as TDiscordErrors,
  DiscordNative as TDiscordNative,
  DiscordSentry as TDiscordSentry,
  DiscordVideo as TDiscordVideo,
  __DISCORD_WINDOW_ID,
  __localeData__,
  __BILLING_STANDALONE__,
  __OVERLAY__,
  __SENTRY__,
  webpackChunkdiscord_app,
} from "./lib";

declare global {
  const __DISCORD_WINDOW_ID: __DISCORD_WINDOW_ID;
  const __localeData__: __localeData__;
  const __BILLING_STANDALONE__: __BILLING_STANDALONE__;
  const __OVERLAY__: __OVERLAY__;
  const __SENTRY__: __SENTRY__;
  const webpackChunkdiscord_app: webpackChunkdiscord_app;
  const DiscordErrors: TDiscordErrors;
  const DiscordNative: TDiscordNative | undefined;
  const DiscordSentry: TDiscordSentry;
  const DiscordVideo: TDiscordVideo;
  interface Window {
    __DISCORD_WINDOW_ID: typeof __DISCORD_WINDOW_ID;
    __localeData__: typeof __localeData__;
    __BILLING_STANDALONE__: typeof __BILLING_STANDALONE__;
    __OVERLAY__: typeof __OVERLAY__;
    __SENTRY__: typeof __SENTRY__;
    webpackChunkdiscord_app: typeof webpackChunkdiscord_app;
    DiscordErrors: typeof DiscordErrors;
    DiscordNative: typeof DiscordNative;
    DiscordSentry: typeof DiscordSentry;
    DiscordVideo: typeof DiscordVideo;
  }
}
