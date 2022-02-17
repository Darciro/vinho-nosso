import React, {useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button, Appbar, Card, FAB, Title, Paragraph, Avatar} from "react-native-paper";
import {StyleSheet} from 'react-native';
import {Rating} from 'react-simple-star-rating'


export default function Home() {
    const navigation = useNavigation();
    const LeftContent = props => <Avatar.Icon {...props} icon="glass-wine"/>
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)
        // other logic
    }
    return (
        <>
            <Appbar.Header>
                {/*<Appbar.Action icon="menu" onPress={() => console.log('Pressed archive')} />*/}
                <Appbar.Content title="Vinho Nosso"/>
                <Appbar.Action icon="filter-variant" onPress={() => console.log('Pressed archive')}/>
                {/*<Appbar.Action icon="dots-vertical" onPress={() => console.log('Pressed archive')} />*/}
            </Appbar.Header>

            <View style={{paddingTop: 20, paddingRight: 20, paddingBottom: 60, paddingLeft: 20}}>

                <Card style={styles.card}>
                    <Card.Cover source={{uri: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/sem-maneiras-bottle-no-bg_1024x1024.png?v=1621005232'}}/>
                    <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 20, right: 20}}/>
                    <Card.Content>
                        <Title>Sem Maneiras Tinto 2017</Title>
                        <Paragraph>€12,90</Paragraph>
                        <Rating onClick={handleRating}
                                ratingValue={rating}
                                fillColor="#B91646"
                                size={20}/>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={{uri: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/papa-figos-casa-ferreirinha-tinto-2018_75a88294-9e26-44dc-b3e9-21bafc066739_1_1024x1024.png?v=1622046509'}}/>
                    <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 20, right: 20}}/>
                    <Card.Content>
                        <Title>Casa Ferreirinha Papa Figos Tinto 2019</Title>
                        <Paragraph>€ 4,50</Paragraph>
                        <Rating onClick={() => console.log('Pressed')}
                                ratingValue={2}
                                fillColor="#B91646"
                                size={20}/>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={{uri: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/2046-thickbox_default_1_1024x1024.jpg?v=1617644350'}}/>
                    <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 20, right: 20}}/>
                    <Card.Content>
                        <Title>Pó De Poeira Tinto 2018</Title>
                        <Paragraph>€15,50</Paragraph>
                        <Rating onClick={() => console.log('Pressed')}
                                ratingValue={5}
                                fillColor="#B91646"
                                size={20}/>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={{uri: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/HerdadedoPesoTrincaBolotasTinto2018_1024x1024.png?v=1590070760'}}/>
                    <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 20, right: 20}}/>
                    <Card.Content>
                        <Title>Herdade Do Peso - Trinca Bolotas Tinto - 2019</Title>
                        <Paragraph>€5,99</Paragraph>
                        <Rating onClick={() => console.log('Pressed')}
                                ratingValue={3}
                                fillColor="#B91646"
                                size={20}/>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Cover source={{uri: 'https://cdn.shopify.com/s/files/1/0366/0732/8387/products/HerdadedoPesoTrincaBolotasTinto2018_1024x1024.png?v=1590070760'}}/>
                    <Button icon="heart" mode="contained" onPress={() => console.log('Pressed')} style={{position: 'absolute', top: 20, right: 20}}/>
                    <Card.Content>
                        <Title>Herdade Do Peso - Trinca Bolotas Tinto - 2019</Title>
                        <Paragraph>€5,99</Paragraph>
                        <Rating onClick={() => console.log('Pressed')}
                                ratingValue={3}
                                fillColor="#B91646"
                                size={20}/>
                    </Card.Content>
                </Card>


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
                    <Appbar.Action icon="magnify" onPress={() => console.log('Pressed mail')}/>
                    <Appbar.Action icon="heart" onPress={() => console.log('Pressed label')}/>
                    <Appbar.Action
                        icon="login"
                        onPress={() => console.log('Pressed delete')}
                    />
                </Appbar>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        marginBottom: 20
    },
    bottom: {
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