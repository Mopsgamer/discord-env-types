import { UnknownMethodAsync } from "../usable";

export interface DiscordGlobalOverlay {
  openOverlay: UnknownMethodAsync;
  closeOverlay: UnknownMethodAsync;
  relayInputClick: UnknownMethodAsync;
  setClickZoneCallback: UnknownMethodAsync;
  setClickZones: UnknownMethodAsync;
  setInteractionEnabled: UnknownMethodAsync;
}
