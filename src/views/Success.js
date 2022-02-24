import * as React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Appbar, Button, Headline, Subheading} from 'react-native-paper';
import Svg, {Image} from 'react-native-svg';

export default function Success({navigation, route}) {
    // const {msg} = route.params;

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
            </Appbar.Header>
            <View style={styles.container}>
                {/*<Svg width="80" height="80">
                    <Image source={require('../assets/images/grapes.svg')}/>
                </Svg>*/}
                <Button
                    icon="glass-wine"
                    compact={true}
                    labelStyle={styles.icon}
                >
                </Button>
                <Headline style={{fontFamily: 'Lato_700Bold', color: "#fff"}}>Já está!</Headline>
                <Subheading style={{fontFamily: 'Lato_400Regular', color: "#fff"}}>Teu vinho cadastrado com sucesso!</Subheading>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89023E',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        fontSize: 100,
        color: '#fff',
        marginBottom: 20
    }
})