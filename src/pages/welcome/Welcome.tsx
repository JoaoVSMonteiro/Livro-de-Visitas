import React from "react"
import styles from "./WelcomeStyles"
import { Image, Text, View } from "react-native"
import { Button } from "@rneui/themed";

const Welcome = ({navigation}: any) => {
    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/bode_rei.png')}></Image>
        <Text style={styles.text}>Bem-Vindo ao formulário de visita de Cabaceiras</Text>
        <Button onPress={() =>(navigation.navigate('mainForm')) }title= "Entrar "size='lg' titleStyle={styles.titleButton} buttonStyle={styles.enterButton}></Button>
        <Image style={styles.sponsers} source={require('../../../assets/sponsers.jpeg')}></Image>
        </View>
    )
}


export default Welcome