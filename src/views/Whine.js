import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, useWindowDimensions, Platform, Image, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Button, Appbar, Card, Title, Paragraph, Surface, Dialog, TextInput, Portal} from "react-native-paper";
import AppLoading from "expo-app-loading";
import {whineList} from '../data/whineList'
import {getDatabase, ref, onValue} from 'firebase/database';

let Rating, StarRating;

if(Platform.OS === 'android') {
    StarRating = require('react-native-star-rating').default;
} else {
    Rating = require('react-simple-star-rating').Rating;
}

export default function Whine({route, navigation}) {
    const {id} = route.params;

    const windowHeight = Math.round(useWindowDimensions().height);
    const coverdHeight = Math.round(windowHeight / 100 * 60);
    const cardHeight = Math.round(windowHeight / 100 * 60);
    const [wine, setWine] = useState(false);
    const db = getDatabase();

    useEffect(() => {
        const reference = ref(db, 'wines/' + id);
        onValue(reference, (snapshot) => {
            setWine(snapshot.val());
        });
    }, []);


    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);
    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate)
    }

    if (!wine) {
        return <AppLoading/>;
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')}/>
                <Appbar.Content title="Vinho Nosso"/>
            </Appbar.Header>

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
                        <Image
                            style={{minHeight: coverdHeight}}
                            source={{uri: wine.image}}
                        />

                        <Surface style={styles.cardWrapper}>
                            <Card style={[styles.card]}>
                                <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                                    <Title style={{fontFamily: 'Lato_700Bold'}}>{wine.name}</Title>
                                    <View style={styles.containerCols}>
                                        <View style={{flex: 1}}>
                                            <Button icon="currency-eur"
                                                    mode="text"
                                                    compact
                                                    uppercase={false}
                                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{wine.price}</Button>
                                            <Button icon="glass-wine"
                                                    mode="text"
                                                    compact
                                                    uppercase={false}
                                                    style={{textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 0, marginLeft: -12}}
                                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{wine.type}</Button>
                                        </View>
                                        <View style={{flex: 2}}>
                                            <Button icon="crosshairs-gps"
                                                    mode="text"
                                                    compact
                                                    uppercase={false}
                                                    style={{textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 0, marginLeft: -12}}
                                                    labelStyle={{fontFamily: 'Lato_300Light'}}>{wine.origin}</Button>
                                            <Button icon="star"
                                                    mode="text"
                                                    compact
                                                    uppercase={false}
                                                    style={{textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingLeft: 0, marginLeft: -12}}
                                                    labelStyle={{fontFamily: 'Lato_300Light'}}>12 Reviews</Button>
                                        </View>
                                    </View>
                                    <Paragraph>{wine.comment}</Paragraph>
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
                </ScrollView>
            </SafeAreaView>

            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog} style={styles.dialog}>
                    <Dialog.Title>Oque achaste do vinho?</Dialog.Title>
                    <Dialog.Content style={styles.dialogContent}>
                        <View style={{padding: 10}}>
                            {Platform.OS === 'android'
                            ?
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={rating}
                                    selectedStar={(rating) => handleRating(rating)}
                                    fullStarColor={'#89023E'}
                                />
                            :
                                <Rating onClick={handleRating} ratingValue={rating} />
                            }
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
    container: {
        flex: 1,
    },
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
        marginBottom: 10,
        // borderRadius: 20,
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
        backgroundColor: '#89023E'
    },
    dialogContent: {
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center'*/
    }
});