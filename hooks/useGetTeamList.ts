import { TeamListItemType } from '../constants/types/TeamListItem';
import { MOCK_POSSE_SIMPLE } from '../mocks/Posse';
import { MOCK_POSSE_DETAILS, MOCK_POSSE_LIST } from '../mocks/PosseList';

export const useGetTeamList = () => {
	// run api call

	const getTeamList = () => {
		const res = MOCK_POSSE_LIST;
		// convert into a dto used by the component	
		res.map(x => x as TeamListItemType)
		return MOCK_POSSE_LIST;
	}

	const getTeamById = (id: string) => {
		//find by id
		return MOCK_POSSE_DETAILS.find(x => x.posseId == id);
	}


	return { getTeamList, getTeamById }
}