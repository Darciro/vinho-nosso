import * as React from 'react';
import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button, Appbar, Card, FAB, Title, Paragraph, Avatar} from "react-native-paper";
import { StyleSheet } from 'react-native';


export default function Home() {
    const navigation = useNavigation();
    const LeftContent = props => <Avatar.Icon {...props} icon="glass-wine" />

    return (
        <>
            {/*<Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => console.log('Pressed archive')} />
                <Appbar.Content title="Vinho Nosso" style={{ alignItems: 'center', textTransform: 'uppercase' }}/>
                <Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed archive')} />
            </Appbar.Header>*/}

            {/*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
            <View style={{flex: 1, padding: 30}}>
                {/*<Text>Home Screen</Text>
                <Button icon="emoticon-happy"
                        mode="contained"
                        onPress={() => navigation.navigate('List')}>
                    Ir para outra página
                </Button>*/}


                <Card style={{marginBottom: 16}}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Content>
                        <Title>Alto Pina</Title>
                        <Paragraph>€ 4,50</Paragraph>
                        <Paragraph></Paragraph>
                    </Card.Content>
                </Card>


                <Card style={{marginBottom: 16}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>


                <Card style={{marginBottom: 16}}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                <View>
                    <FAB
                        style={styles.fab}
                        small={false}
                        icon="plus"
                        onPress={() => console.log('Pressed')}
                    />

                    <Appbar style={styles.bottom}>
                        <Appbar.Action
                            icon="home-variant"
                            onPress={() => console.log('Pressed archive')}
                        />
                        <Appbar.Action icon="magnify" onPress={() => console.log('Pressed mail')} />
                        <Appbar.Action icon="heart" onPress={() => console.log('Pressed label')} />
                        <Appbar.Action
                            icon="login"
                            onPress={() => console.log('Pressed delete')}
                        />
                    </Appbar>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bottom: {
        // justifyContent: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'fixed',
        margin: 20,
        right: 0,
        bottom: 0,
        zIndex: 10
    },
});