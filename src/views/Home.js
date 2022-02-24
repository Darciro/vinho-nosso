import React, {useEffect, useState} from 'react'
import {View} from "react-native";
import {Appbar, Divider, Menu, Text} from "react-native-paper";
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import WineCard from "../components/WineCard";
// import {whineList} from '../data/whineList'
// import initializeApp from '../api/firebaseApi';
import {getDatabase, ref, onValue} from 'firebase/database';
import {whineList} from "../data/whineList";
import AppLoading from "expo-app-loading";
// import {whineList} from "../data/whineList";


export default function Home() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [wineList, setWineList] = useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);
    const db = getDatabase();

    useEffect(() => {
        const wineData = [];
        const reference = ref(db, 'wines');
        onValue(reference, (snapshot) => {
            setWineList(snapshot.val());

            /*if( !snapshot.val() ) {
                setWineList([]);
                return;
            }

            Object.entries(snapshot.val()).forEach(([key, value]) => {
                wineData[key] = value;
            });
            setWineList(wineData);*/
        });
    }, []);

    if (!wineList) {
        return <AppLoading/>;
    }

    /*console.table(wineList)
    const reversedArr = [...Object.keys(wineList)].reverse();
    console.table(reversedArr)*/
    /*const reversedArr = [...Object.keys(wineList)].reverse();
    console.log(reversedArr)*/
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Vinho Nosso"/>

                <Menu
                    visible={menuVisible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action color={'#fff'} icon="filter-variant" onPress={openMenu}/>}>
                    <Menu.Item onPress={() => {
                    }} title="Item 1"/>
                    <Menu.Item onPress={() => {
                    }} title="Item 2"/>
                    <Divider/>
                    <Menu.Item onPress={() => {
                    }} title="Item 3"/>
                </Menu>
            </Appbar.Header>

            <SafeAreaView style={styles.container}>
                <ScrollView>

                    <View style={{paddingTop: 10, paddingRight: 10, paddingBottom: 110, paddingLeft: 10, backgroundColor: '#fff'}}>

                        {wineList &&
                            Object.keys(wineList).map((key, index, wine) => {
                                console.log(key, index)
                                return (
                                    <WineCard
                                        key={index}
                                        id={key}
                                        name={wineList[key].name}
                                        type={wineList[key].type}
                                        origin={wineList[key].origin}
                                        price={wineList[key].price}
                                        rate={wineList[key].rate}
                                        image={wineList[key].image}
                                    />
                                )
                            })
                        }

                    </View>
                </ScrollView>
            </SafeAreaView>

            {/*<AppbarBottom />*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    }
});