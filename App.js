import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from './src/components/TabBar';
import Home from './src/views/Home';
import Whine from './src/views/Whine';
import Search from './src/views/Search';
import Favorites from './src/views/Favorites';
import WhinePhoto from './src/views/WhinePhoto';
import WhineDesc from './src/views/WhineDesc';
import Success from './src/views/Success';
import Auth from './src/views/Auth';


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#89023E',
        accent: '#EBF5EE',
        surface: '#EBF5EE',
        text: '#105652',
    }
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="PlaceholderScreen" component={Home}/>
            <Tab.Screen name="Favorites" component={Favorites}/>
            <Tab.Screen name="Auth" component={Auth}/>
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    const [fontsLoaded] = useFonts({
        'Lato_100Thin': require('./assets/fonts/Lato_100Thin.ttf'),
        'Lato_300Light': require('./assets/fonts/Lato_300Light.ttf'),
        'Lato_400Regular': require('./assets/fonts/Lato_400Regular.ttf'),
        'Lato_700Bold': require('./assets/fonts/Lato_700Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"HomeTabs"} screenOptions={{headerShown: false}}>
                    <Stack.Screen name="HomeTabs" component={HomeTabs}/>
                    <Stack.Screen name="Whine" component={Whine}/>
                    <Stack.Screen name="WhinePhoto" component={WhinePhoto}/>
                    <Stack.Screen name="WhineDesc" component={WhineDesc}/>
                    <Stack.Screen name="Success" component={Success}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;