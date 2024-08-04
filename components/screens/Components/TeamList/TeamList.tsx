import { FlatList, View } from "react-native";
import React from "react";
import TeamListItem from "../TeamListItem/TeamListItem";
import { PosseSimple } from "../../../../types/characters";

type TeamListType = {
  data: PosseSimple[];
  onTeamListPress: (id: string) => void;
};
const TeamList = ({ data, onTeamListPress }: TeamListType) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      renderItem={({ item, index }) => (
        <TeamListItem onPress={onTeamListPress} item={item} />
      )}
    />
  );
};

export default TeamList;
