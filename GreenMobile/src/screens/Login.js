
import React, { useState } from 'react';
import {  StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../components/api';


export default function Login(props) {
  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (usernameField != '' && passwordField != '') {

      const body = {
        username: usernameField,
        password: passwordField
      }

      api.post('login/logar', body)
        .then((res) => {
          console.log('Login realizado com sucesso' + res.data);
          props.navigation.push('Home')
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

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
        placeholder="Usuário"
        value={usernameField}
        onChangeText={t => setUsernameField(t)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        value={passwordField}
        onChangeText={t => setPasswordField(t)}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={handleSignClick}
      >
        <Text style={styles.botaoText}>Login</Text>

      </TouchableOpacity>

      <Text style={styles.textCadastro}
        onPress={() => { props.navigation.navigate('Cadastro', props.navigation) }} >
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
    backgroundColor: '#5f9f5f',
  },
  logo: {
    width: 150,
    height: 150,


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
  textCadastro: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: "#ffff"
  }
});