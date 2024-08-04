import React from "react";
import { BorderRadius } from "../../../../constants/BorderRadius";
import { padding } from "../../../../constants/padding";
import { TeamListItemType } from "../../../../constants/types/TeamListItem";
import { useCustomTheme } from "../../../../contexts/ThemeContext";
import Box from "../../../Box/Box";
import Card from "../../../Card/Card";
import { ThemedText } from "../../../Text/ThemedText";

const TeamListItem = ({
  onPress,
  item,
}: {
  onPress: (id: string) => void;
  item: TeamListItemType;
}) => {
  const {
    currentTheme: { colors },
  } = useCustomTheme();

  console.log(item.numberOfCharacters, "numberofcharacter");
  return (
    <Card
      onPress={() => onPress(item.posseId)}
      style={{
        borderRadius: BorderRadius.md,
        paddingTop: padding.lg,
        paddingBottom: padding.lg,
        backgroundColor: colors.card,
      }}
    >
      <Box style={{ flex: 1, flexDirection: "row" }}>
        <Box style={{ flex: 1, flexDirection: "column" }}>
          <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
          <ThemedText type="default">{item.numberOfCharacters}</ThemedText>
        </Box>
        <Box style={{ flex: 1, flexDirection: "column" }}></Box>
      </Box>
    </Card>
  );
};

export default TeamListItem;
