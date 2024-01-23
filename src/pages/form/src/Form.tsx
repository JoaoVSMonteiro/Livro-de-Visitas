import React, { useState } from 'react'
import { View, Image , TextInput,} from 'react-native'
import styles from './FormStyle'
import { Button } from '@rneui/themed'
import firebaseService from './services/firebaseService'
import Toast from 'react-native-toast-message'
import App from '../../../../App'

export const Form = ({navigation}: any) => {

  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [visitMotivation, setVisitMotivation] = useState('')

  const onSubmit = () => {
    const data = {name, country, state, city, email, visitMotivation}
    firebaseService.save(data, 'Form')
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Formulário enviado com sucesso!',
      text2: '   Obrigado pela visita'
    });
    navigation.navigate('welcome');
  };

  
  return (
    <View style={styles.formView}>
      <View style={styles.partnersLogo}>
        <Image style={styles.image} source={require('../../../../assets/bode_rei.png')}/>
        <Image source={require('../../../../assets/partners.png')}/>
      </View>
      <View style={styles.form}>
        
        <TextInput value = {name} onChangeText={(text) => setName(text)} placeholderTextColor='#797B7C' placeholder='Nome' style= {styles.input}/>
        <TextInput value = {country} onChangeText={(text) => setCountry(text)} placeholderTextColor='#797B7C' placeholder='País' style= {styles.input}/>
        <TextInput value = {state} onChangeText={(text) => setState(text)} placeholderTextColor='#797B7C' placeholder='Estado/Província' style= {styles.input}/>
        <TextInput value = {city} onChangeText={(text) => setCity(text)} placeholderTextColor='#797B7C' placeholder='Cidade de origem' style= {styles.input}/>
        <TextInput value = {email} onChangeText={(text) => setEmail(text)} placeholderTextColor='#797B7C' placeholder='E-mail' style= {styles.input}/>
        <TextInput value = {visitMotivation} onChangeText={(text) => setVisitMotivation(text)} placeholderTextColor='#797B7C' placeholder='Motivo da visita' style= {styles.input}/>
       <View style={styles.button}>
       <Button title = 'Enviar' onPress={() => onSubmit()}
        buttonStyle={{backgroundColor: '#087A0B', marginTop: '40%'}} ></Button>
       </View>
      </View>
    </View>
  )
}
export default Form