import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "./components/Home";
import About from "./components/About";
import Game, {Easy, Expert, Medium} from "./components/Game";
import ApiCat from "./components/ApiCat";

export default function App() {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Home"}
                activeColor='#ffff'
                inactiveColor="#3B3F3FFF"
                barStyle={{backgroundColor: '#025b6b'}}
            >
                <Tab.Screen name={'Home'} component={Home}/>
                <Tab.Screen name={'Game'} component={Game} />
                <Tab.Screen name={'ApiCat'} component={ApiCat}/>

            </Tab.Navigator>

        </NavigationContainer>
    );
}


