import { AvailableDictionary, UnknownMethod } from "../custom";

export interface DiscordSpellChecker {
  getAvailableDictionaries(): Promise<AvailableDictionary[]>;
  on: UnknownMethod;
  replaceMisspelling: UnknownMethod<Promise<void>>;
  setLearnedWords(words: string[]): Promise<void>;
  setLocale(locale: AvailableDictionary): Promise<void>;
}
