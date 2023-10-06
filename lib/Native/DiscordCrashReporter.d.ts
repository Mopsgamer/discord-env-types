import { ReleaseChannel } from "../custom";

export interface DiscordCrashReporter {
  getFlattenMetadata(): {
    email: string;
    nativeBuildNumber: string;
    release_channel: ReleaseChannel;
    "sentry[environment]": ReleaseChannel;
    "sentry[release]": string;
    "sentry[user][email]": string;
    "sentry[user][id]": string;
    "sentry[user][username]": string;
    user_id: string;
    username: string;
  };
  getMetadata(): {
    email: string;
    nativeBuildNumber: string;
    release_channel: ReleaseChannel;
    sentry: {
      environment: ReleaseChannel;
      release: string;
      user: {
        email: string;
        id: string;
        username: string;
      };
    };
    user_id: string;
    username: string;
  };
  triggerJSException(location: 0 | 1 | 2): void;
  updateCrashReporter(additionalMeta: Record<string, unknown>): void;
}
