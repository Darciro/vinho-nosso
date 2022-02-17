import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appbar, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Home from './src/views/Home';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#B91646',
        accent: '#DFD8CA',
        surface: '#FBF3E4',
        text: '#105652',
    },
};


function List() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction/>
                <Appbar.Content title="Title" subtitle="Subtitle"/>
                <Appbar.Action icon="magnify"/>
                <Appbar.Action icon="dots-vertical"/>
            </Appbar.Header>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Página #2</Text>
            </View>
        </>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="List" component={List} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;