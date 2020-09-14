
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends Component {

  clicou = () => {
    Alert.alert("Green Startup", "App em construcao");
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('../assets/logoGreen.png')}
          style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha" />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => { this.clicou() }}
        >
          <Text style={styles.botaoText}>Login</Text>

        </TouchableOpacity>
        
        <Text style={styles.textCadastro}
              onPress={ () => {this.props.navigation.navigate('Cadastro')} } >
          Criar conta gratuita
      </Text>

      </View>



    )
  }
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