import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image, Platform} from "react-native";
import {Appbar, Button, FAB, Text} from 'react-native-paper';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function WhinePhoto({route, navigation}) {
    {/*<Text style={{padding: 50}}>{JSON.stringify(photo, null, 2)}</Text>*/
    }

    const [hasPermission, setHasPermission] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    const [image, setImage] = useState(null);

    let camera: Camera;

    if (Platform.OS === 'android') {
        useEffect(() => {
            (async () => {
                const {status} = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        }, []);

        if (hasPermission === null) {
            return <Text>No access to camera...</Text>;
        }

        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            if (Platform.OS === 'android') {
                setPreviewVisible(true)
                setCapturedImage(result)
            } else {
                setImage(result.uri);
            }
        }
    };

    const takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync(
            {
                aspect: [4, 3],
                quality: 1,
                base64: true,
                exif: false,
                skipProcessing: true
            }
        )
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

    const retakePicture = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
        // takePicture()
    }

    const savePhoto = () => {
        console.log('Salvando')
    }

    const CameraPreview = ({photo}) => {
        return (
            <View style={{flex: 1, width: "100%"}}>
                <Appbar.Header>
                    <Appbar.Content title="Prosseguir"/>
                    <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('WhineDesc', {image: photo.uri})}/>
                </Appbar.Header>
                <ImageBackground
                    source={{uri: photo && photo.uri}}
                    style={{
                        flex: 1
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        paddingTop: 50,
                        paddingBottom: 50,
                        justifyContent: 'space-between',
                        backgroundColor: '#fff'
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <FAB
                            small
                            icon="close"
                            onPress={() => navigation.navigate('Home')}
                            style={{marginRight: 30, shadowOpacity: '0'}}
                        />
                        <FAB
                            icon="undo-variant"
                            onPress={() => retakePicture()}
                        />
                        <FAB
                            small
                            icon="image"
                            onPress={pickImage}
                            style={{marginLeft: 30}}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const WhineCamera = () => {
        return (
            <Camera
                style={{flex: 1, width: "100%"}}
                ref={(r) => {
                    camera = r
                }}
                savePhoto={savePhoto}
                retakePicture={retakePicture}
                ratio={'1:1'}
                type={Camera.Constants.Type.back}
            >
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        paddingTop: 50,
                        paddingBottom: 50,
                        justifyContent: 'space-between',
                        backgroundColor: '#fff'
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <FAB
                            small
                            icon="close"
                            onPress={() => navigation.navigate('Home')}
                            style={{marginRight: 30, shadowOpacity: '0'}}
                        />
                        <FAB
                            icon="camera"
                            onPress={takePicture}
                        />
                        <FAB
                            small
                            icon="image"
                            onPress={pickImage}
                            style={{marginLeft: 30}}
                        />
                    </View>
                </View>
            </Camera>
        )
    }

    if (Platform.OS === 'android') {
        return (
            <View style={styles.container}>
                {previewVisible && capturedImage
                    ? <CameraPreview photo={capturedImage}/>
                    : <WhineCamera/>
                }
            </View>
        )
    } else {
        return (
            <>
                {image &&
                    <>
                        <Appbar.Header>
                            <Appbar.Content title="Prosseguir"/>
                            <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('WhineDesc', {image: image})}/>
                        </Appbar.Header>
                        <ImageBackground
                            source={{uri: image}}
                            style={{
                                flex: 1
                            }}
                        />
                    </>
                }

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        paddingTop: 50,
                        paddingBottom: 50,
                        justifyContent: 'space-between',
                        backgroundColor: '#fff'
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <FAB
                            small
                            icon="close"
                            onPress={() => navigation.navigate('Home')}
                            style={{marginRight: 30, shadowOpacity: '0'}}
                        />
                        <FAB
                            icon="file-upload"
                            onPress={pickImage}
                        />
                        <FAB
                            small
                            icon="image"
                            onPress={() => {
                                console.log('gallery')
                            }}
                            style={{marginLeft: 30, shadowOpacity: '0'}}
                        />
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});