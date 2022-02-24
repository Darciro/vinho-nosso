import * as React from 'react';
import {View, Pressable, Dimensions, StyleSheet} from 'react-native'
import {FAB, Text} from "react-native-paper";

const {width} = Dimensions.get('window');

export default function TabBar({state, descriptors, navigation}: any) {
    return (
        <View style={{marginHorizontal: 10}}>
            <View style={styles.mainContainer}>
                {state.routes.map((route: any, index: number) => {

                    if (route.name === "PlaceholderScreen") {
                        return (
                            <View key={index} style={styles.mainItemContainer}>
                                <FAB
                                    style={styles.fab}
                                    small={false}
                                    icon="camera-iris"
                                    onPress={() => navigation.navigate('WhinePhoto')}
                                />
                            </View>
                        );
                    }

                    const {options} = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    let icon;
                    switch (label) {
                        case 'Home':
                            icon = 'home-variant';
                            break;
                        case 'Search':
                            icon = 'magnify';
                            break;
                        case 'Favorites':
                            icon = 'heart';
                            break;
                        case 'Auth':
                            icon = 'account';
                            break;
                    }

                    return (
                        <View key={index} style={styles.mainItemContainer}>
                            <FAB
                                style={[styles.fab, isFocused && styles.fabActive]}
                                small
                                icon={icon}
                                color={isFocused ? "#89023E" : "#333B42"}
                                onPress={onPress}
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 25,
        backgroundColor: "#89023E",
        borderRadius: 25,
        width: '100%'
        // marginHorizontal: width * 0.1,
        /*marginLeft: (width / 2) * -1,
        width: width,*/
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 1,
        borderColor: "#333B42"
    },
    fab: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: "#FFF",
    },
    fabActive: {
        backgroundColor: "#EBF5EE",
    }
})