import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from "react-native";
import {FAB, Text} from 'react-native-paper';
import {Camera} from 'expo-camera';

export default function AddWhine({route, navigation}) {
    {/*<Text style={{padding: 50}}>{JSON.stringify(photo, null, 2)}</Text>*/}

    const [hasPermission, setHasPermission] = useState(null);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)

    let camera: Camera;

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
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
            <View
                style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    width: '100%',
                    height: '100%'
                }}
            >
                <ImageBackground
                    source={{uri: photo && photo.uri}}
                    style={{
                        flex: 1
                    }}
                />
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
            >
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        padding: 20,
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            alignSelf: 'center',
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <FAB
                            small={false}
                            icon="camera"
                            onPress={takePicture}
                        />
                    </View>
                </View>
            </Camera>
        )
    }

    return (
        <View style={styles.container}>
            {previewVisible && capturedImage
                ? <CameraPreview photo={capturedImage} />
                : <WhineCamera />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});