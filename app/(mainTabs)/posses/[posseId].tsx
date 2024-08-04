import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Box from "../../../components/Box/Box";
import { ThemedText } from "../../../components/Text/ThemedText";
import { useGetTeamList } from "../../../hooks/useGetTeamList";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Posse as PosseType } from "../../../data/schema/Posse";

const Posse = () => {
  const { posseId } = useLocalSearchParams();
  const { getTeamById } = useGetTeamList();
  const nav = useNavigation();
  const [team, setTeam] = useState<PosseType>();

  useEffect(() => {
    if (posseId !== undefined) {
      const _team = getTeamById(posseId as string);
      setTeam(_team);
      nav.setOptions({ title: _team?.name });
    }
  }, [nav, posseId, getTeamById]);

  return (
    <View>
      <FlatList
        data={team?.characters}
        renderItem={undefined}
        ListEmptyComponent={() => (
          <Box>
            <ThemedText>Time to create your posse!</ThemedText>
          </Box>
        )}
      />
      <Text>TeamList</Text>
    </View>
  );
};

export default Posse;
