
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Api from '../../Api';


export default function Login(props) {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if(emailField != '' && passwordField != '') {

      let json = await Api.login(emailField, passwordField);

      if(json.resultadopost == 'ok') {

        props.navigation.push('Home');
        console.log(json);
      } else {
          alert('E-mail e/ou senha errados!');
      }

  } else {
      alert("Preencha os campos!");
  }
}


    return (
      <View style={styles.container}>

        <Image source={require('../assets/logoGreen.png')}
          style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t=>setEmailField(t)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          />

        <TouchableOpacity
          style={styles.botao}
          onPress={ handleSignClick }
        >
          <Text style={styles.botaoText}>Login</Text>

        </TouchableOpacity>
        
        <Text style={styles.textCadastro}
              onPress={ () => {props.navigation.navigate('Cadastro', props.navigation)} } >
          Criar conta gratuita
      </Text>

      </View>



    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 12,
    padding: 15,
    width: 200,
    backgroundColor: '#fff',
    fontSize: 20,
    borderRadius: 4,
  },
  botao: {
    width: 150,
    height: 42,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  },
  textCadastro : {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: "#ffff"
  }
});