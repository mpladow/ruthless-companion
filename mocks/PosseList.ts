import { Posse } from '../data/schema/Posse';
import { PosseSimple } from '../data/schema/PosseSimple';

export const MOCK_POSSE_LIST: PosseSimple[] = [
	{ posseId: "1", name: "The Hell Hounds", createdAt: new Date(), colorThemeId: "1", numberOfCharacters: 2 } as PosseSimple,
	{ posseId: "2", name: "The Blood Bowls", createdAt: new Date(), colorThemeId: "1", numberOfCharacters: 2 } as PosseSimple,
	{ posseId: "3", name: "The Cowboys", createdAt: new Date(), colorThemeId: "1", numberOfCharacters: 2 } as PosseSimple,
]

export const MOCK_POSSE_DETAILS: Posse[] = [
	{ posseId: "1", name: "The Hell Hounds", createdAt: new Date(), colorThemeId: "1", characters: [] } as Posse,
	{ posseId: "2", name: "The Blood Bowls", createdAt: new Date(), colorThemeId: "1", characters: [] } as Posse,
	{ posseId: "3", name: "The Cowboys", createdAt: new Date(), colorThemeId: "1", characters: [] } as Posse,
]

