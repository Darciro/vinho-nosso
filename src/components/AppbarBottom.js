import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {Appbar, FAB, Snackbar} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";

export default function AppbarBottom() {
    const navigation = useNavigation();
    const [snackBarVisible, setSnackBarVisible] = React.useState(false);
    const onToggleSnackBar = () => setSnackBarVisible(!snackBarVisible);
    const onDismissSnackBar = () => setSnackBarVisible(false);

    return (
        <>
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                onPress={() => navigation.navigate('AddWhine')}
            />

            <Appbar style={styles.bottom}>
                <Appbar.Action
                    icon="home-variant"
                    onPress={() => navigation.navigate('Home')}
                />
                <Appbar.Action
                    icon="magnify"
                    onPress={() => navigation.navigate('Search')}
                />
                <Appbar.Action
                    icon="heart"
                    onPress={() => navigation.navigate('Favorites')}
                />
                <Appbar.Action
                    icon="login"
                    onPress={onToggleSnackBar}
                />
            </Appbar>

            <Snackbar
                visible={snackBarVisible}
                onDismiss={onDismissSnackBar}
                style={{marginBottom: 100}}>
                Aqui virá a página de login/logout
            </Snackbar>
        </>
    )
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
});