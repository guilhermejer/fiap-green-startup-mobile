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
import api from '../../components/api';
import { ScrollView } from 'react-native-gesture-handler';


export default function Cadastro(props, data) {
  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    try{
    const schema = Yup.object().shape({
      nome: Yup.string()
        .required('Este campo é obrigatório'),

      sobrenome: Yup.string()
        .required('Este campo é obrigatório'),

      username: Yup.string()
        .required('Este campo é obrigatório'),

      endereco: Yup.string()
        .required('Este campo é obrigatório'),

      hashId: Yup.string()
        .required('Este campo é obrigatório'),

      password: Yup.string()
        .required('Este campo é obrigatório'),

      confPassword: Yup.string()
        .required('Este campo é obrigatório'),
       });


       await schema.validate(data, {
         abortEarly: false,
       })


       var pessoa = {"nome":data.nome,
       "sobrenome":data.sobrenome,
       "endereco":data.endereco,
       "hashId":data.hashId,
       "sexo":data.sexo
      }
    var login = {"username":data.username,
        "password":data.password}
      
      api.post('pessoa/createPessoa',{pessoa, login})
      .then((res) => {console.log('Cadastro realizado com sucesso' + res.data);
      props.navigation.goBack()})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });

     
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

          <Input name="nome" label="Nome" />

          <Input
            name="sobrenome"
            label="Sobrenome"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            name="username"
            label="Nome de usuário"
            autoCorrect={false}
            autoCapitalize="none"
          />

            <Input name="endereco" label="Endereco" />
            <Input name="hashId" label="CPF ou CNPJ" type="number" />

          <Input
            name="password"
            label="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <Input
            name="confPassword"
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