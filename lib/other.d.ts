import classNames from "classnames";
import { SentryHub } from "./Sentry";
import {
  DiscordLocaleData,
  DiscordLocaleKey,
  ReleaseChannel,
  UnknownMethod,
} from "./custom";
import emotion from "@emotion/react";

export type __DISCORD_WINDOW_ID = string;
export type __isReactDndBackendSetUp = boolean;
export type __localeData__ = Record<DiscordLocaleKey, DiscordLocaleData>;
export type __BILLING_STANDALONE__ = boolean;
export type __OVERLAY__ = boolean;
export type _ws = null | unknown;
export type __sentry_instrumentation_handlers__ = Record<
  "keypress",
  {
    refCount: number;
    handler(e: Element): void;
  }
>;
export interface __SENTRY_IPC__ {
  sendEnvelope: UnknownMethod<void>;
  sendEvent: UnknownMethod<void>;
  sendScope: UnknownMethod<void>;
}
export interface __SENTRY__ {
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
}
export interface __SECRET_EMOTION__ {
  caches: Pick<
    emotion.EmotionCache,
    "registered" | "inserted" | "key" | "nonce"
  >;
  sheet: {
    ctr: number;
    injected: boolean;
    isSpeedy: boolean;
    opts: unknown;
    tags: [HTMLStyleElement];
    flush: emotion.EmotionCache["sheet"]["flush"];
    inject(): void;
    insert: emotion.EmotionCache["sheet"]["insert"];
    speedy(setSpeedy: boolean): void;
  };
  injectGlobal: UnknownMethod<void>;
  css: typeof emotion.css;
  cx: typeof classNames;
  flush(): void;
  keyframes: typeof emotion.keyframes;
  getRegisteredStyles(registeredStyles: string[], className: string): string;
  merge(className: string, source: Record<string, unknown>): string;
  hydrate(ids: unknown[]): void;
}
export interface GLOBAL_ENV {
  ACTIVITY_APPLICATION_HOST: string;
  ADYEN_KEY: string;
  ALGOLIA_KEY: string;
  API_ENDPOINT: string;
  API_VERSION: number;
  ASSET_ENDPOINT: string;
  BRAINTREE_KEY: string;
  CDN_HOST: string;
  DEVELOPERS_ENDPOINT: string;
  GATEWAY_ENDPOINT: string;
  GIFT_CODE_HOST: string;
  GUILD_TEMPLATE_HOST: string;
  HTML_TIMESTAMP: number;
  INVITE_HOST: string;
  MARKETING_ENDPOINT: string;
  MEDIA_PROXY_ENDPOINT: string;
  MIGRATION_DESTINATION_ORIGIN: string;
  MIGRATION_SOURCE_ORIGIN: string;
  NETWORKING_ENDPOINT: string;
  PROJECT_ENV: string;
  PUBLIC_PATH: string;
  RELEASE_CHANNEL: ReleaseChannel;
  REMOTE_AUTH_ENDPOINT: string;
  RTC_LATENCY_ENDPOINT: string;
  SENTRY_TAGS: {
    buildId: string;
    buildType: string;
  };
  STRIPE_KEY: string;
  WEBAPP_ENDPOINT: string;
  WIDGET_ENDPOINT: string;
}

export type webpackChunkdiscord_app = [number[], Record<number, unknown>][];
