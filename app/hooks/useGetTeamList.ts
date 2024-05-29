import { TEAM_LIST_SINGLE_TEST } from 'mocks/TeamList';
import { TeamListItem } from 'screens/Character/types/TeamListItem';

export const useGetTeamList = () => {
	// run api call

	const getTeamList = () => {
		return TEAM_LIST_SINGLE_TEST;
	}

	const getTeamById = (id: string) => {
		//find 
		return TEAM_LIST_SINGLE_TEST.find(x => x.teamListId == id)
	}


	return { getTeamList, getTeamById }
}