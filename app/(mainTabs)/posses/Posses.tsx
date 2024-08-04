import { View } from "react-native";
import ButtonWrapper from "../../../components/Button/ButtonWrapper";
import Card from "../../../components/Card/Card";
import PageContainer from "../../../components/Containers/PageContainer/PageContainer";
import { ThemedText } from "../../../components/Text/ThemedText";
import { padding } from "../../../constants/padding";
import { useCustomTheme } from "../../../contexts/ThemeContext";
import { useGetTeamList } from "../../../hooks/useGetTeamList";
import { Slot, useRouter } from "expo-router";
import React from "react";
import TeamList from "../../../components/screens/Components/TeamList/TeamList";

const CharacterHome = () => {
  const { handleSetTheme } = useCustomTheme();
  // get data from api
  const { getTeamListSimpleFormat } = useGetTeamList();

  const {
    currentTheme: { colors },
  } = useCustomTheme();
  const router = useRouter();
  const handleTeamListItemPress = (id: string) => {
    router.push(`../posses/${id}`);
  };

  const handleCreateCharacterPress = () => {
    router.push(`../posses/CreateCharacter`);
  };

  return (
    <PageContainer style={{ height: "100%" }}>
      <View style={{ paddingBottom: padding.lg }}>
        <ThemedText type="subtitle">
          Here are your posses ready for action
        </ThemedText>
      </View>
      {/* Pull into seperate FlatList component */}
      <TeamList
        data={getTeamListSimpleFormat()}
        onTeamListPress={handleTeamListItemPress}
      />
      <View style={{ paddingTop: padding.lg, flexDirection: "row" }}>
        <ButtonWrapper fullWidth={false} centered>
          <Card
            style={{ backgroundColor: colors.cardLight }}
            onPress={() => handleSetTheme()}
          >
            <ThemedText>Create Team</ThemedText>
          </Card>
        </ButtonWrapper>
        <View style={{ width: padding.lg * 1.5 }}></View>
        <ButtonWrapper fullWidth={false} centered>
          <Card
            style={{ backgroundColor: colors.cardLight }}
            onPress={() => handleCreateCharacterPress()}
          >
            <ThemedText>Create New Character</ThemedText>
          </Card>
        </ButtonWrapper>
      </View>
      <Slot />
    </PageContainer>
  );
};

export default CharacterHome;
