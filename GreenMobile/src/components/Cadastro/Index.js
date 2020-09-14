import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import { 
  StyleSheet, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Platform, 
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Input from './Input';


export default function Cadastro(props) {
  
  const formRef = useRef(null);
  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
  }

  function functionThatGetsData() {
       
       const allData = formRef.current.getData();
    
        return allData;
      }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
      <View>
      
        <StatusBar barStyle="dark-content" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Image 
            style={styles.logo} 
            source={require('../../assets/logoGreen.png')}
          />

          <Input name="name" label="Nome Completo" />
          
          <Input
            name="email" 
            label="E-mail" 
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Scope path="address">
            <Input name="Celular"  label="Celular" keyboardType="number-pad" />
            <Input name="zipcode" label="ZIP code" keyboardType="number-pad" />
          </Scope>

          <Input
            name="Senha" 
            label="Senha" 
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TouchableOpacity style={styles.submitButton} onPress={() => { props.navigation.navigate('Info', props, functionThatGetsData())}}>
            <Text style={styles.submitButtonText}>Send</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 200
  },

  submitButton: {
    backgroundColor: 'darkseagreen',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center'
  },

  submitButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
});