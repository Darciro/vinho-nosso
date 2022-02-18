import * as React from 'react';
import {Button, Card, FAB, Paragraph, Surface, Title, TouchableRipple} from "react-native-paper";
import {Rating} from "react-simple-star-rating";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function WhineCard(props) {
    const {id, title, type, origin, price, rate, thumb} = props;
    const navigation = useNavigation();

    /*const [fontsLoaded] = useFonts({
        'Lato_100Thin': require('../../assets/fonts/Lato_100Thin.ttf'),
        'Lato_300Light': require('../../assets/fonts/Lato_300Light.ttf'),
        'Lato_400Regular': require('../../assets/fonts/Lato_400Regular.ttf'),
        'Lato_700Bold': require('../../assets/fonts/Lato_700Bold.ttf')
    });*/

    /*if (!fontsLoaded) {
        return <AppLoading />;
    }*/

    return (
        <Surface style={styles.cardWrapper}>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={url => navigation.navigate('Whine', {id: id})}>
                <Card style={styles.card}>
                    <Card.Cover source={{uri: thumb}}/>
                    <FAB
                        style={styles.like}
                        small
                        icon="heart"
                        color="#fff"
                        onPress={() => console.log('Pressed')}
                    />
                    <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                        <Title style={{fontFamily: 'Lato_700Bold'}}>{title}</Title>
                        <View style={styles.containerCols}>
                            <View style={{flex: 1}}>
                                <Button icon="currency-eur"
                                        mode="text"
                                        compact
                                        uppercase={false}
                                        style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                        labelStyle={{fontFamily: 'Lato_300Light'}}>{price}</Button>
                                <Button icon="glass-wine"
                                        mode="text"
                                        compact
                                        uppercase={false}
                                        style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                        labelStyle={{fontFamily: 'Lato_300Light'}}>{type}</Button>
                            </View>
                            <View style={{flex: 2}}>
                                <Button icon="crosshairs-gps"
                                        mode="text"
                                        compact
                                        uppercase={false}
                                        style={{textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 0, marginLeft: -12}}
                                        labelStyle={{fontFamily: 'Lato_300Light'}}>{origin}</Button>
                                <Button icon="star"
                                        mode="text"
                                        compact
                                        uppercase={false}
                                        style={{textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 0, marginLeft: -12}}
                                        labelStyle={{fontFamily: 'Lato_300Light'}}>12 Reviews</Button>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableRipple>
        </Surface>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 4,
    },
    card: {
        position: 'relative'
    },
    like: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#B91646'
    },
    containerCols: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
});