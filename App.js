import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Loja from "./src/pages/loja/index";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/login/script";

export default function App() {

  const Stack = createStackNavigator()

  const linking = {config: {screens: {Login :'/Login', Loja: '/Loja'}}}
  return (
    <NavigationContainer linking={linking} style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loja" component={Loja} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("screen")
  },
});