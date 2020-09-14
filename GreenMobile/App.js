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

import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro/Index';
import Info from './src/components/Info/Index';
import Home from './src/components/Home';
import Perfil from './src/components/Perfil';


const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions : {
      header: null
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerTitle: 'Cadastro'
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      headerTitle: 'Infos'
    }
  },
  //Home: {
  //  screen: Home,
  //  navigationOptions: {
  //    headerTitle: 'Home'
  //  }
  //},
  //Perfil:{
  //  screen: Perfil,
  //  navigationOptions:{
  //    headerTitle: 'Perfil'
  //  }
  //}
});

const App = createAppContainer(MainNavigator);

export default App;
