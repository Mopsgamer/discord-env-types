import { AvailableDictionary, UnknownMethod } from "../usable";

export interface DiscordSpellChecker {
  getAvailableDictionaries(): Promise<AvailableDictionary[]>;
  on: UnknownMethod;
  replaceMisspelling: UnknownMethod<Promise<void>>;
  setLearnedWords(words: string[]): Promise<void>;
  setLocale(locale: AvailableDictionary): Promise<void>;
}
