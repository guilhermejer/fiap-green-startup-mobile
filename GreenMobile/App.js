/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro/Index';
import Home from './src/screens/Home/Index';
import Perfil from './src/screens/Perfil';
import Produto from './src/screens/Produto/Index';


const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions : {
      headerShown: false
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerTitle: 'Cadastro'
    }
  },

  Produto: {
    screen: Produto,
    navigationOptions:{
      headerTitle: 'Detalhes'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  //Perfil:{
  //  screen: Perfil,
  //  navigationOptions:{
  //    headerTitle: 'Perfil'
  //  }
  //}
});

const App = createAppContainer(MainNavigator);

export default App;
