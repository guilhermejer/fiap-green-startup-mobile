import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
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
import Input from '../../components/Input';
import Api from '../../../Api';
import { ScrollView } from 'react-native-gesture-handler';


export default function Cadastro(props, data) {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try{
    const schema = Yup.object().shape({
      name: Yup.string()
        .required('Este campo é obrigatório'),

      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('Este campo é obrigatório'),

      celular: Yup.string()
        .min(10, 'Numero inválido (DDD + Numero)')
        .required('Este campo é obrigatório'),

      cep: Yup.string()
        .min(8, 'CEP inválido (min 8 digitos)')
        .required('Este campo é obrigatório'),

      endereco: Yup.string()
        .required('Este campo é obrigatório'),

      estado: Yup.string()
        .max(2, 'Somente a Sigla (ex. SP)')
        .required('Este campo é obrigatório'),

      cidade: Yup.string()
        .required('Este campo é obrigatório'),

      senha: Yup.string()
        .required('Este campo é obrigatório'),

      confirmasenha: Yup.string()
        .required('Este campo é obrigatório'),
       });


       await schema.validate(data, {
         abortEarly: false,
       })

    console.log(data.name);

      let json = await Api.cadastro(data);

      if (json.resultadopost == 'ok') {

        alert("Cadastro realizado com sucesso!")
        props.navigation.goBack();
        console.log(json);
      } else {
        alert('Erro ao realizar cadastro!');
      }

     
    reset();

    } catch(err){
      if (err instanceof Yup.ValidationError){
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    }
  }


  return (
    <ScrollView styles={styles.scrollview}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>



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
          <Input name="celular" label="Celular" keyboardType="number-pad" />

            <Input name="cep" label="CEP" keyboardType="number-pad" />
            <Input name="endereco" label="Endereco" />
            <Input name="estado" label="Estado" />
            <Input name="cidade" label="Cidade" />


          <Input
            name="senha"
            label="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Input
            name="confirmasenha"
            label="Confirme sua senha"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
            <Text style={styles.submitButtonText}>Send</Text>
          </TouchableOpacity>
        </Form>



      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },

  scrollview: {
    marginHorizontal: 20
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