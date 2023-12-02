import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { StatusBar } from "react-native";
import NavigatorTheme from "./style/NavigatorTheme";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={NavigatorTheme}>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
