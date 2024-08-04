import { Character } from "./Character";

export interface Posse {
  posseId: string;
  name: string;
  createdAt: Date;
  characters: Character[];
  colorThemeId: string;
}
