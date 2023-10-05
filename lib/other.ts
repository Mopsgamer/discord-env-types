import { SentryHub } from "./Sentry";
import { DiscordLocaleData, DiscordLocaleKey, UnknownMethod } from "./usable";

export type __DISCORD_WINDOW_ID = string;
export type __isReactDndBackendSetUp = boolean;
export type __localeData__ = Record<DiscordLocaleKey, DiscordLocaleData>;
export type __BILLING_STANDALONE__ = boolean;
export type __OVERLAY__ = boolean;
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

export type webpackChunkdiscord_app = [number[], Record<number, unknown>][];
