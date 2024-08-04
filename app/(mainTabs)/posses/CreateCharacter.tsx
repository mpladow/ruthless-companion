import { View } from "react-native";
import PageContainer from "../../../components/Containers/PageContainer/PageContainer";
import { ThemedText } from "../../../components/Text/ThemedText";
import { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

const CreateCharacter = () => {
  const progress = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {}, []);

  return (
    <PageContainer>
      <View style={{ paddingTop: 50 }}>
        <ThemedText>CreateCharacter -- Practice page for reanimated</ThemedText>
      </View>
    </PageContainer>
  );
};
export default CreateCharacter;
