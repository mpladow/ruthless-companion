import { MOCK_POSSE_DETAILS, MOCK_POSSE_LIST } from "../mocks/PosseList";
import { PosseSimple } from "../types/characters";

export type Posse = {
  posseId: string;
  name: string;
  createdAt: Date;
  colorThemeId: string;
};

export const useGetTeamList = () => {
  // run api call

  const getTeamListSimpleFormat = () => {
    const res = MOCK_POSSE_LIST;
    // convert into a dto used by the component
    const dto = res.map(
      (x) =>
        ({
          posseId: x.posseId,
          name: x.name,
          createdAt: x.createdAt,
          numberOfCharacters: x.characters.length,
          colorThemeId: x.colorThemeId,
        }) as PosseSimple,
    );
    return dto;
  };

  const getTeamListDetailed = () => {
    const res = MOCK_POSSE_LIST;
    //map to dto
    return res;
  };

  const getTeamById = (id: string) => {
    //find by id
    return MOCK_POSSE_DETAILS.find((x) => x.posseId == id);
  };

  return { getTeamListSimpleFormat, getTeamListDetailed, getTeamById };
};
