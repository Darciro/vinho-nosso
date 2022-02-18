import React, {useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {View} from "react-native";
import {Appbar, Button, Divider, Menu, Provider} from "react-native-paper";
import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import WhineCard from "../components/WhineCard";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import AppbarBottom from "../components/AppbarBottom";


export default function Home() {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = React.useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    /*const [fontsLoaded] = useFonts({
        'Lato_100Thin': require('../../assets/fonts/Lato_100Thin.ttf'),
        'Lato_300Light': require('../../assets/fonts/Lato_300Light.ttf'),
        'Lato_400Regular': require('../../assets/fonts/Lato_400Regular.ttf'),
        'Lato_700Bold': require('../../assets/fonts/Lato_700Bold.ttf')
    });*/

    /*if (!fontsLoaded) {
        return <AppLoading/>;
    }*/

    const whineList = [
        {
            id: 1,
            title: 'Sem Maneiras Tinto 2017',
            type: 'Tinto',
            origin: 'Alentejo',
            price: '15,90',
            rate: 3,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/sem-maneiras-bottle-no-bg_1024x1024.png?v=1621005232',
        },
        {
            id: 2,
            title: 'Casa Ferreirinha Papa Figos Tinto 2019',
            type: 'Tinto',
            origin: 'Douro',
            price: '4,50',
            rate: 5,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/papa-figos-casa-ferreirinha-tinto-2018_75a88294-9e26-44dc-b3e9-21bafc066739_1_1024x1024.png?v=1622046509',
        },
        {
            id: 3,
            title: 'Pó De Poeira Tinto 2018',
            type: 'Branco',
            origin: 'Bairrada',
            price: '13,45',
            rate: 2,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/2046-thickbox_default_1_1024x1024.jpg?v=1617644350',
        },
        {
            id: 4,
            title: 'Monólogo Arinto P24 2019',
            type: 'Rosé',
            origin: 'Dão',
            price: '6,97',
            rate: 1,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/HerdadedoPesoTrincaBolotasTinto2018_1024x1024.png?v=1590070760',
        },
        {
            id: 5,
            title: 'VinMar',
            type: 'Verde',
            origin: 'Península de Setúbal',
            price: '3,49',
            rate: 3,
            thumb: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/1994-thickbox_default_1_1024x1024.jpg?v=1585869978',
        }
    ]
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Vinho Nosso"/>

                <Menu
                    visible={menuVisible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action color={'#fff'} icon="filter-variant" onPress={openMenu}/>}>
                    <Menu.Item onPress={() => {}} title="Item 1" />
                    <Menu.Item onPress={() => {}} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </Appbar.Header>

            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <View style={{paddingTop: 20, paddingRight: 20, paddingBottom: 60, paddingLeft: 20, backgroundColor: '#fff'}}>

                        {whineList &&
                            whineList.map((whine) => {
                                return (
                                    <WhineCard
                                        key={whine.id}
                                        id={whine.id}
                                        title={whine.title}
                                        type={whine.type}
                                        origin={whine.origin}
                                        price={whine.price}
                                        rate={whine.rate}
                                        thumb={whine.thumb}
                                    />
                                )
                            })}
                    </View>
                </ScrollView>
            </SafeAreaView>

            <AppbarBottom />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    }
});