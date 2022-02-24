import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Platform, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Appbar, Card, Title, Surface, TextInput, Divider, Text} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import {Slider} from '@miblanchard/react-native-slider';
import {getDatabase, ref, onValue, update, push, child} from 'firebase/database';

let Rating, StarRating;

if (Platform.OS === 'android') {
    StarRating = require('react-native-star-rating').default;
} else {
    Rating = require('react-simple-star-rating').Rating;
}

export default function WhineDesc({route, navigation}) {
    const {image} = route.params;

    console.log(image);

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [type, setType] = useState('');
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const [origin, setOrigin] = useState('');
    const [sliderOne, setSliderOne] = useState(5);
    const [sliderTwo, setSliderTwo] = useState(5);
    const [sliderThree, setSliderThree] = useState(5);
    const [sliderFour, setSliderFour] = useState(5);
    const db = getDatabase();

    const whineType = [
        {
            label: "Vinho Tinto",
            value: "Vinho Tinto",
        },
        {
            label: "Vinho Branco",
            value: "Vinho Branco",
        },
        {
            label: "Vinho Verde",
            value: "Vinho Verde",
        },
        {
            label: "Vinho Rosé",
            value: "Vinho Rosé",
        },
        {
            label: "Vinho do Porto",
            value: "Vinho do Porto",
        },
        {
            label: "Espumante",
            value: "Espumante",
        },
    ];

    const whineRegion = [
        {
            label: "Alentejo",
            value: "Alentejo",
        },
        {
            label: "Bairrada",
            value: "Bairrada",
        },
        {
            label: "Beira Interior",
            value: "Beira Interior",
        },
        {
            label: "Dão",
            value: "Dão",
        },
        {
            label: "Douro",
            value: "Douro",
        },
        {
            label: "Península de Setúbal",
            value: "Península de Setúbal",
        },
        {
            label: "Tejo",
            value: "Tejo",
        },
    ];

    const addWine = async () => {

        const wineData = {
            name: name,
            type: type,
            origin: origin,
            price: '6,97',
            rate: 3,
            image: image,
            comment: comment
        };

        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'wines')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const addWineRoute = {};
        addWineRoute['/wines/' + newPostKey] = wineData;
            // const res = await
        update(ref(db), addWineRoute).then((res) => {
            console.log('Deu certo?', res);
            navigation.navigate('Success')
        })
        .catch((error) => {
            console.log(error);
        });


    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction icon="trash-can-outline" onPress={() => navigation.navigate('WhinePhoto')}/>
                <Appbar.Content title="Descreva o vinho"/>
                {/*<Appbar.Action icon="content-save" onPress={() => navigation.navigate('Success')}/>*/}
                <Appbar.Action icon="content-save" onPress={addWine}/>
            </Appbar.Header>

            <SafeAreaView style={[styles.container]}>
                <ScrollView>
                    <View style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
                        <Surface style={styles.cardWrapper}>
                            <Card style={[styles.card]}>
                                <Card.Cover source={{uri: image}}/>
                                <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                                    <Title style={{fontFamily: 'Lato_700Bold'}}>Sobre o vinho</Title>
                                    <Divider style={{marginTop: 15, marginBottom: 10}}/>
                                    <TextInput
                                        value={name}
                                        label="Nome do vinho"
                                        mode="outlined"
                                        onChangeText={name => setName(name)}
                                    />
                                    <Divider style={{marginTop: 15, marginBottom: 10}}/>
                                    <DropDown
                                        label={"Tipo"}
                                        mode={"outlined"}
                                        visible={showDropDown}
                                        showDropDown={() => setShowDropDown(true)}
                                        onDismiss={() => setShowDropDown(false)}
                                        value={type}
                                        setValue={setType}
                                        list={whineType}
                                    />
                                    <Divider style={{marginTop: 15, marginBottom: 10}}/>
                                    <DropDown
                                        label={"Região"}
                                        mode={"outlined"}
                                        visible={showMultiSelectDropDown}
                                        showDropDown={() => setShowMultiSelectDropDown(true)}
                                        onDismiss={() => setShowMultiSelectDropDown(false)}
                                        value={origin}
                                        setValue={setOrigin}
                                        list={whineRegion}
                                    />
                                    {/*<DropDown
                                        label={"Região"}
                                        mode={"outlined"}
                                        visible={showMultiSelectDropDown}
                                        showDropDown={() => setShowMultiSelectDropDown(true)}
                                        onDismiss={() => setShowMultiSelectDropDown(false)}
                                        value={origin}
                                        setValue={setOrigin}
                                        list={whineRegion}
                                        multiSelect
                                    />*/}
                                    <Divider style={{marginTop: 15, marginBottom: 10}}/>
                                    <TextInput
                                        value={comment}
                                        label="Descrição"
                                        mode="outlined"
                                        multiline
                                        numberOfLines={4}
                                        onChangeText={comment => setComment(comment)}
                                    />
                                </Card.Content>
                            </Card>
                        </Surface>

                        <Surface style={styles.cardWrapper}>
                            <Card style={[styles.card]}>
                                <Card.Content style={{padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                                    <Title style={{fontFamily: 'Lato_700Bold'}}>Características do vinho</Title>
                                    <Divider style={{marginTop: 15, marginBottom: 10}}/>

                                    <View style={[styles.containerCols]}>
                                        <Text style={{flex: 1}}>
                                            Leve
                                        </Text>
                                        <Text style={{flex: 1, textAlign: 'right'}}>
                                            Intenso
                                        </Text>
                                    </View>

                                    <Slider
                                        value={sliderOne}
                                        animateTransitions={true}
                                        animationType="timing"
                                        thumbTintColor={"#89023E"}
                                        minimumValue={0}
                                        maximumValue={10}
                                        step={1}
                                        onValueChange={value => setSliderOne(value)}
                                    />

                                    <View style={[styles.containerCols]}>
                                        <Text style={{flex: 1}}>
                                            Suave
                                        </Text>
                                        <Text style={{flex: 1, textAlign: 'right'}}>
                                            Tânico
                                        </Text>
                                    </View>

                                    <Slider
                                        value={sliderTwo}
                                        animateTransitions={true}
                                        animationType="timing"
                                        thumbTintColor={"#89023E"}
                                        minimumValue={0}
                                        maximumValue={10}
                                        step={1}
                                        onValueChange={value => setSliderTwo(value)}
                                    />

                                    <View style={[styles.containerCols]}>
                                        <Text style={{flex: 1}}>
                                            Seco
                                        </Text>
                                        <Text style={{flex: 1, textAlign: 'right'}}>
                                            Doce
                                        </Text>
                                    </View>

                                    <Slider
                                        value={sliderThree}
                                        animateTransitions={true}
                                        animationType="timing"
                                        thumbTintColor={"#89023E"}
                                        minimumValue={0}
                                        maximumValue={10}
                                        step={1}
                                        onValueChange={value => setSliderThree(value)}
                                    />

                                    <View style={[styles.containerCols]}>
                                        <Text style={{flex: 1}}>
                                            Macio
                                        </Text>
                                        <Text style={{flex: 1, textAlign: 'right'}}>
                                            Ácido
                                        </Text>
                                    </View>

                                    <Slider
                                        value={sliderFour}
                                        animateTransitions={true}
                                        animationType="timing"
                                        thumbTintColor={"#89023E"}
                                        minimumValue={0}
                                        maximumValue={10}
                                        step={1}
                                        onValueChange={value => setSliderFour(value)}
                                    />
                                </Card.Content>
                            </Card>
                        </Surface>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        position: 'relative'
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
    },
});