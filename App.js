import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

import Home from './src/views/Home';
import Whine from './src/views/Whine';
import Search from './src/views/Search';
import Favorites from './src/views/Favorites';
import AddWhine from './src/views/AddWhine';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#b91646',
        accent: '#DFD8CA',
        surface: '#FBF3E4',
        text: '#105652',
    }
};

const Stack = createNativeStackNavigator();

function App() {

    const [fontsLoaded] = useFonts({
        'Lato_100Thin': require('./assets/fonts/Lato_100Thin.ttf'),
        'Lato_300Light': require('./assets/fonts/Lato_300Light.ttf'),
        'Lato_400Regular': require('./assets/fonts/Lato_400Regular.ttf'),
        'Lato_700Bold': require('./assets/fonts/Lato_700Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="Whine" component={Whine} options={{headerShown: false}}/>
                    <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
                    <Stack.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
                    <Stack.Screen name="AddWhine" component={AddWhine} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;