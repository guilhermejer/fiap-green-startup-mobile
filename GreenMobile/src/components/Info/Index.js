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
import Input from '../Info/Input';

export default function Info(props, data) {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.log(data);

    reset();
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

          <Input name="endereco" label="Endereco" />
          <Input name="numero" label="Numero" />
          <Input
            name="cep" 
            label="CEP" 
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="number-pad"
    
          />

          <Scope path="address">
            <Input name="estado" label="Estado" />
            <Input name="cidade" label="Cidade" />
          </Scope>

          <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
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