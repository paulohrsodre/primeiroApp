import React from "react"
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, Linking } from "react-native"

const colorGithub = '#010409';
const urlGithub = 'https://github.com/paulohrsodre'

const App = () => {

    const handlePress = async () => {
        const response = await Linking.canOpenURL(urlGithub);
        console.log('Verificando link');
        if(response) {
            console.log('Link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Foto de Paulo Sodré fundo branco' 
                    style={style.avatar} 
                    source={require('../images/perfil2.jpg')} 
                />
                <Text
                    accessibilityLabel='Nome: Paulo Sodré'
                    style={[style.defaultText, style.name]}>
                        Paulo Sodré
                </Text>
                <Text
                    accessibilityLabel='Nickname: paulohrsodre'
                    style={[style.defaultText, style.nickname]}>
                        paulohrsodre
                </Text>
                <Text
                    accessibilityLabel='Descrição: Student of Information Systems at IFMA |  
                    enthusiast of Game Development and technologies in general | 
                    2D pixelart artist by hobby!!!'
                    style={[style.defaultText, style.description]}>
                    Student of Information Systems at IFMA |  
                    Enthusiast of Game Development and technologies in general | 
                    2D pixelartist by hobby!!!
                </Text>

                <Pressable onPress={handlePress}>
                    <View style={style.button}>
                        <Text style={style.textButton}>
                            Open in Github!
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20, 
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: 'white',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 20,
        color: 'grey'
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});