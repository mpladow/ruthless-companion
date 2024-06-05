import { Character } from './Character';

export interface PosseSimple {
	posseId: string;
	name: string;
	createdAt: Date;
	numberOfCharacters: number;
	colorThemeId: string;
}