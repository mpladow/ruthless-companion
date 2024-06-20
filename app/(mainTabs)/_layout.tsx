import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useCustomTheme } from "../../contexts/ThemeContext";
import { ThemeProvider } from "@react-navigation/native";

const MainTabNavigator = () => {
  const { currentTheme } = useCustomTheme();

  return (
    <ThemeProvider value={currentTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: currentTheme.colors.tabIconSelected,
          tabBarInactiveTintColor: currentTheme.colors.tabIconDefault,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: currentTheme.colors.background,
            borderTopColor: currentTheme.colors.card,
          },
        }}
      >
        <Tabs.Screen
          name="posses"
          options={{
            tabBarLabel: "Characters",
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome6
                name="people-line"
                size={24}
                color={
                  focused
                    ? currentTheme.colors.tabIconSelected
                    : currentTheme.colors.tabIconDefault
                }
              />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
};

export default MainTabNavigator;
