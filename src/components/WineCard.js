import * as React from 'react';
import {Button, Card, FAB, Paragraph, Surface, Title, TouchableRipple} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function WineCard(props) {
    const {id, name, type, origin, price, rate, image} = props;
    const navigation = useNavigation();

    return (
        <Surface style={styles.cardWrapper}>
            <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={url => navigation.navigate('Whine', {id: id})}>
                <Card style={styles.card}>
                    <Card.Cover source={{uri: image}}/>
                    <FAB
                        style={styles.like}
                        small
                        icon="heart"
                        color="#fff"
                        onPress={() => console.log('Pressed')}
                    />
                    <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                        <Title style={{fontFamily: 'Lato_700Bold'}}>{name}</Title>
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
        marginBottom: 10,
        // borderRadius: 20,
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
        backgroundColor: '#89023E'
    },
    containerCols: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
});