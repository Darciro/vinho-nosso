import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, useWindowDimensions} from "react-native";
import {Button, Appbar, Card, Title, Paragraph, Surface, Dialog, TextInput, HelperText, Portal} from "react-native-paper";
import {StyleSheet} from 'react-native';

import {Rating} from "react-simple-star-rating";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import StarRating from "react-native-star-rating";


export default function Whine({route, navigation}) {
    const {id} = route.params;

    /*const [fontsLoaded] = useFonts({
        'Lato_100Thin': require('../../assets/fonts/Lato_100Thin.ttf'),
        'Lato_300Light': require('../../assets/fonts/Lato_300Light.ttf'),
        'Lato_400Regular': require('../../assets/fonts/Lato_400Regular.ttf'),
        'Lato_700Bold': require('../../assets/fonts/Lato_700Bold.ttf')
    });*/

    const whineList = [
        {
            id: 1,
            title: 'Sem Maneiras Tinto 2017',
            type: 'Tinto',
            origin: 'Alentejo',
            price: '15,90',
            rate: 3,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/sem-maneiras-bottle-no-bg_1024x1024.png?v=1621005232',
            comment: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.'
        },
        {
            id: 2,
            title: 'Casa Ferreirinha Papa Figos Tinto 2019',
            type: 'Tinto',
            origin: 'Douro',
            price: '4,50',
            rate: 5,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/papa-figos-casa-ferreirinha-tinto-2018_75a88294-9e26-44dc-b3e9-21bafc066739_1_1024x1024.png?v=1622046509',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.'
        },
        {
            id: 3,
            title: 'Pó De Poeira Tinto 2018',
            type: 'Branco',
            origin: 'Bairrada',
            price: '13,45',
            rate: 2,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/2046-thickbox_default_1_1024x1024.jpg?v=1617644350',
            comment: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
        },
        {
            id: 4,
            title: 'Monólogo Arinto P24 2019',
            type: 'Rosé',
            origin: 'Dão',
            price: '6,97',
            rate: 1,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/HerdadedoPesoTrincaBolotasTinto2018_1024x1024.png?v=1590070760',
            comment: 'Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.'
        },
        {
            id: 5,
            title: 'VinMar',
            type: 'Verde',
            origin: 'Península de Setúbal',
            price: '3,49',
            rate: 3,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/1994-thickbox_default_1_1024x1024.jpg?v=1585869978',
            comment: 'Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'
        }
    ];

    const windowHeight = Math.round(useWindowDimensions().height);
    const coverdHeight = Math.round(windowHeight / 100 * 60);
    const cardHeight = Math.round(windowHeight / 100 * 60);
    const [whine, setWhine] = useState(false);

    useEffect(() => {
        setWhine(whineList.filter(x => x.id === id)[0])
    }, []);


    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)
    }

    // if (!fontsLoaded || !whineList) {
    if (!whineList) {
        return <AppLoading/>;
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
                <Appbar.Content title="Vinho Nosso"/>
            </Appbar.Header>

            <View style={{flex: 1, padding: 20, backgroundColor: '#fff'}}>

                <Surface style={styles.cardWrapper}>
                    <Card style={[styles.card]}>
                        {/*<Card.Cover source={{uri: whine.thumb}} style={{minHeight: coverdHeight}}/>*/}
                        <Card.Cover source={{uri: whine.thumb}}/>
                        <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                            <Title style={{fontFamily: 'Lato_700Bold'}}>{whine.title}</Title>
                            <Button icon="currency-eur"
                                    mode="text"
                                    compact
                                    uppercase={false}
                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{whine.price}</Button>
                            <Button icon="glass-wine"
                                    mode="text"
                                    compact
                                    uppercase={false}
                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{whine.type}</Button>
                            <Button icon="crosshairs-gps"
                                    mode="text"
                                    compact
                                    uppercase={false}
                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{whine.origin}</Button>
                            <Button icon="star"
                                    mode="text"
                                    compact
                                    uppercase={false}
                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                    labelStyle={{fontFamily: 'Lato_300Light'}}>12 Reviews</Button>
                            <Paragraph>{whine.comment}</Paragraph>
                        </Card.Content>
                        <Card.Actions style={{padding: 20, paddingTop: 0}}>
                            <Button icon="star" mode="outlined" uppercase={false} style={{marginRight: 10}} onPress={() => setDialogVisible(true)}>
                                Dar nota
                            </Button>
                            <Button icon="heart" mode="outlined" uppercase={false} onPress={() => console.log('Pressed')}>
                                Favoritos
                            </Button>
                        </Card.Actions>
                    </Card>
                </Surface>
            </View>

            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog} style={styles.dialog}>
                    <Dialog.Title>Oque achaste do vinho?</Dialog.Title>
                    <Dialog.Content style={styles.dialogContent}>
                        <View style={{padding: 10}}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={rating}
                                selectedStar={(rating) => handleRating(rating)}
                                fullStarColor={'#b91646'}
                            />
                        </View>
                        <TextInput
                            style={{marginTop: 20, marginBottom: 20, width: '100%'}}
                            label="Deixe um comentário"
                            onChangeText={text => console.log(text)}
                        />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button uppercase={false} onPress={hideDialog}>Já está!</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        zIndex: 10
    },
    containerCols: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    cardWrapper: {
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 4,
    },
    card: {
        position: 'relative',
    },
    like: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#B91646'
    },
    /*dialog: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        zIndex: 50
    },*/
    dialogContent: {
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center'*/
    }
});