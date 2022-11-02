
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "./components/Home";

export default function App() {
  const Tab = createMaterialBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = {"Home"}
      activeColor='#f0edf6'
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#ef0000'}}
      >
      <Tab.Screen name={'Home'} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


