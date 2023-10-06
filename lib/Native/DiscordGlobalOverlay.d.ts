import { UnknownMethodAsync } from "../custom";

export interface DiscordGlobalOverlay {
  openOverlay: UnknownMethodAsync;
  closeOverlay: UnknownMethodAsync;
  relayInputClick: UnknownMethodAsync;
  setClickZoneCallback: UnknownMethodAsync;
  setClickZones: UnknownMethodAsync;
  setInteractionEnabled: UnknownMethodAsync;
}
