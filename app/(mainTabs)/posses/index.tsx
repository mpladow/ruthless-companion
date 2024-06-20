import { View } from "react-native";
import ButtonWrapper from "../../../components/Button/ButtonWrapper";
import Card from "../../../components/Card/Card";
import PageContainer from "../../../components/Containers/PageContainer/PageContainer";
import { ThemedText } from "../../../components/Text/ThemedText";
import { padding } from "../../../constants/padding";
import { useCustomTheme } from "../../../contexts/ThemeContext";
import { useGetTeamList } from "../../../hooks/useGetTeamList";
import { Slot, useNavigation, useRouter } from "expo-router";
import React from "react";
import TeamList from "../../../components/screens/Components/TeamList/TeamList";

const CharacterHome = () => {
  const { handleSetTheme } = useCustomTheme();
  // get data from api
  const { getTeamList } = useGetTeamList();

  const {
    currentTheme: { colors },
  } = useCustomTheme();
  const router = useRouter();
  const handleTeamListItemPress = (id: string) => {
    router.push(`../posses/${id}`);
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
        data={getTeamList()}
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
            onPress={() => handleSetTheme()}
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
