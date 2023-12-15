export * from "./lib";
import {
  __BILLING_STANDALONE__,
  __DISCORD_WINDOW_ID,
  __localeData__,
  __OVERLAY__,
  __SECRET_EMOTION__,
  __SENTRY__,
  __sentry_instrumentation_handlers__,
  __SENTRY_IPC__,
  _ws,
  DiscordErrors,
  DiscordNative,
  DiscordSentry,
  DiscordVideo,
  GLOBAL_ENV,
  webpackChunkdiscord_app,
} from "./lib";
import * as lodash from "lodash";

declare global {
  const __BILLING_STANDALONE__: __BILLING_STANDALONE__;
  const __DISCORD_WINDOW_ID: __DISCORD_WINDOW_ID;
  const __localeData__: __localeData__;
  const __OVERLAY__: __OVERLAY__;
  const __SECRET_EMOTION__: __SECRET_EMOTION__;
  const __SENTRY__: __SENTRY__;
  const __sentry_instrumentation_handlers__: __sentry_instrumentation_handlers__;
  const __SENTRY_IPC__: __SENTRY_IPC__;
  const __timingFunction: () => number;
  const _: lodash.__;
  const _ws: _ws;
  const DiscordErrors: DiscordErrors;
  const DiscordNative: DiscordNative | undefined;
  const DiscordSentry: DiscordSentry;
  const DiscordVideo: DiscordVideo;
  const GLOBAL_ENV: GLOBAL_ENV;
  const webpackChunkdiscord_app: webpackChunkdiscord_app;
  interface Window {
    __BILLING_STANDALONE__: typeof __BILLING_STANDALONE__;
    __DISCORD_WINDOW_ID: typeof __DISCORD_WINDOW_ID;
    __localeData__: typeof __localeData__;
    __OVERLAY__: typeof __OVERLAY__;
    __SECRET_EMOTION__: typeof __SECRET_EMOTION__;
    __SENTRY__: typeof __SENTRY__;
    __sentry_instrumentation_handlers__: typeof __sentry_instrumentation_handlers__;
    __SENTRY_IPC__: typeof __SENTRY_IPC__;
    __timingFunction: typeof __timingFunction;
    _: typeof _;
    _ws: typeof _ws;
    DiscordErrors: typeof DiscordErrors;
    DiscordNative: typeof DiscordNative;
    DiscordSentry: typeof DiscordSentry;
    DiscordVideo: typeof DiscordVideo;
    GLOBAL_ENV: typeof GLOBAL_ENV;
    webpackChunkdiscord_app: typeof webpackChunkdiscord_app;
  }
}
