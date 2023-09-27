# discord-env-types

This package adds Discord environment types, e.g. DiscordNative, DiscrordSentry, DiscordErrors and so on.

## Installation

```npm
npm install discord-env-types
```

## Usage

If you want to declare global Discord environment variables:

```ts
import "discord-env-types";

DiscordNative.clipboard.copy("test");
```

```ts
import { DiscordNative as Native } from "discord-env-types";

const PickedNative: Pick<Native, "clipboard" | "settings"> = ...;
PickedNative.clipboard.copy("test");

DiscordNative.clipboard.copy("test");
```

If you want to use types only, without global declarations:

```ts
import { DiscordNative as Native } from "discord-env-types/lib";

const PickedNative: Pick<Native, "clipboard" | "settings"> = ...;
PickedNative.clipboard.copy("test");

DiscordNative.clipboard.copy("test"); // Error: Cannot find name 'DiscordNative'.
```
