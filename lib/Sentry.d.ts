import { UnknownMethod, ReleaseChannel } from ".";

export interface DiscordSentry {
  getCurrentHub(): SentryHub;
}

export interface SentryHubStackItem {
  scope: unknown;
  user: unknown;
}

export type Integration = UnknownMethod;
export type IntegrationName =
  | "Breadcrumbs"
  | "Dedupe"
  | "FunctionToString"
  | "GlobalHandlers"
  | "HttpContext"
  | "InboundFilters"
  | "LinkedErrors"
  | "TryCatch";

export type SentryClientMetadata = unknown;

export interface SentryClientOptions {
  autoSessionTracking: false;
  beforeSend: UnknownMethod;
  defaultIntegrations: Integration[];
  denyUrls: RegExp[];
  dsn: string;
  enabled: false;
  environment: ReleaseChannel;
  ignoreErrors: string[];
  integrations: Integration[];
  release: string;
  sendClientReports: true;
  stackParser: UnknownMethod;
  transport: UnknownMethod;
  tunnel: string;
  _metadata: SentryClientMetadata;
}

export interface SentryClient {
  _dsn: {
    host: string;
    pass: string;
    path: string;
    port: string;
    projectId: string;
    protocol: string;
    publicKey: string;
  };
  _hooks: unknown;
  _integrations: Record<IntegrationName, Integration>;
  _integrationsInitialized: boolean;
  _numProcessing: number;
  _options: SentryClientOptions;
  _outcomes: unknown;
  _transport: { send: UnknownMethod; flush: UnknownMethod };
  captureUserFeedback: UnknownMethod;
  eventFromException: UnknownMethod;
  eventFromMessage: UnknownMethod;
  sendEvent: UnknownMethod;
  _flushOutcomes: UnknownMethod;
  addIntegration: UnknownMethod;
  captureEvent: UnknownMethod;
  captureException: UnknownMethod;
  captureMessage: UnknownMethod;
  captureSession: UnknownMethod;
  close(index?: number): Promise<boolean>;
  emit: UnknownMethod;
  close(index?: number): Promise<boolean>;
  getDsn(): unknown;
  getIntegration: UnknownMethod;
  getIntegrationById: UnknownMethod;
  getOptions(): unknown;
  getSdkMetadata(): unknown;
  getTransport(): unknown;
  on: UnknownMethod;
  recordDroppedEvent: UnknownMethod;
  sendSession: UnknownMethod;
  setupIntegrations: UnknownMethod;
  __init: UnknownMethod;
  __init2: UnknownMethod;
  __init3: UnknownMethod;
  __init4: UnknownMethod;
  __init5: UnknownMethod;
  _captureEvent: UnknownMethod;
  _clearOutcomes: UnknownMethod;
  _isClientDoneProcessing: UnknownMethod;
  _isEnabled(): boolean;
  _prepareEvent: UnknownMethod;
  _process: UnknownMethod;
  _processEvent: UnknownMethod;
  _sendEnvelope: UnknownMethod;
  _updateSessionFromEvent: UnknownMethod;
}

export interface SentryHub {
  _lastEventId: string;
  _stack: SentryHubStackItem[];
  _version: number;
  addBreadcrumb: UnknownMethod;
  bindClient: UnknownMethod;
  captureEvent: UnknownMethod;
  captureException: UnknownMethod;
  captureMessage: UnknownMethod;
  captureSession: UnknownMethod;
  configureScope: UnknownMethod;
  constructor: UnknownMethod;
  endSession: UnknownMethod;
  getClient: UnknownMethod;
  getIntegration: UnknownMethod;
  getScope: UnknownMethod;
  getStack: UnknownMethod;
  getStackTop: UnknownMethod;
  isOlderThan: UnknownMethod;
  lastEventId: UnknownMethod;
  popScope: UnknownMethod;
  pushScope: UnknownMethod;
  run: UnknownMethod;
  setContext: UnknownMethod;
  setExtra: UnknownMethod;
  setExtras: UnknownMethod;
  setTag: UnknownMethod;
  setTags: UnknownMethod;
  setUser: UnknownMethod;
  shouldSendDefaultPii: UnknownMethod;
  startSession: UnknownMethod;
  startTransaction: UnknownMethod;
  traceHeaders: UnknownMethod;
  withScope: UnknownMethod;
  _callExtensionMethod: UnknownMethod;
  _sendSessionUpdate: UnknownMethod;
  _withClient: UnknownMethod;
}
