import * as React from 'react';
import { View } from "react-native";
import {ActivityIndicator, Appbar} from 'react-native-paper';
import AppbarBottom from "../components/AppbarBottom";

export default function Search({route, navigation}) {
    return (
        <>
            <Appbar.Header>
                {/*<Appbar.BackAction onPress={() => navigation.navigate('Home')}/>*/}
                <Appbar.Content title="Buscar" subtitle="Por favor aguarde um instante"/>
            </Appbar.Header>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator animating={true} color="#b91646" size="larger" />
                <AppbarBottom />
            </View>
        </>
    )
}