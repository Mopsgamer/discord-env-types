# discord-env-types

<p>
<a aria-label="NPM version" href="https://www.npmjs.com/package/discord-env-types">
<img alt="" src="https://img.shields.io/npm/v/discord-env-types.svg?style=for-the-badge&labelColor=0869B8"></a>
<a aria-label="License" href="#">
<img alt="" src="https://img.shields.io/npm/l/discord-env-types.svg?style=for-the-badge&labelColor=579805"></a>
</p>
This package adds Discord environment types.

> [!WARNING]  
> The Discord environment is subject to change and some declarations may lie.

## Installation

```npm
npm install --save-dev discord-env-types
```

## Usage

If you want to declare global Discord environment variables:

```ts
import type DET from "discord-env-types";

DiscordNative.clipboard.copy("test");
```

```ts
import type DET from "discord-env-types";

const PickedNative: Pick<DET.DiscordNative, "clipboard" | "settings"> = ...;
PickedNative.clipboard.copy("test");

DiscordNative.clipboard.copy("test");
```

If you want to use types only, without global declarations:

```ts
import type DET from "discord-env-types/lib";

const PickedNative: Pick<DET.DiscordNative, "clipboard" | "settings"> = ...;
PickedNative.clipboard.copy("test");

DiscordNative.clipboard.copy("test"); // Error: Cannot find name 'DiscordNative'.
```

## Declarations

discord-env-types declares the types of the following variables:

- `__BILLING_STANDALONE__`
- `__DISCORD_WINDOW_ID`
- `__localeData__`
- `__OVERLAY__`
- `__SECRET_EMOTION__`
- `__SENTRY__`
- `__sentry_instrumentation_handlers__`
- `__SENTRY_IPC__`
- `__timingFunction`
- `_`
- `_ws`
- `$`
- `DiscordErrors`
- `DiscordNative`
- `DiscordSentry`
- `DiscordVideo`
- `GLOBAL_ENV`
- `webpackChunkdiscord_app`
