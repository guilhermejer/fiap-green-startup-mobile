import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import api from '../../components/api';
import { ScrollView } from 'react-native-gesture-handler';



export default function Home(props) {
  const [produtos, setProdutos] = React.useState([]);
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    api.get('produto/')
    .then((res) => {
    // console.log('Produtos listados com sucesso' + res.data)
     setProdutos(res.data)
     console.log(produtos)})
    .catch((err) => {
     console.error("ops! ocorreu um erro" + err);
  });
  },[]);


  const Item = ({ item }) => (
       <TouchableHighlight 
        style={styles.listItemTouch}  >
        <View style={styles.listItemContainer}>
          <View style={styles.listItemContainerLeftChild}>
            <Image style={styles.listItemLeftImage} resizeMode='contain'  source={{uri:"https://source.unsplash.com/random",}}></Image>
          </View>
          <View style={styles.listItemContainerRightChild}>
            <View style={styles.listItemProductNameContainer}>
              <Text style={styles.productDetails}>{item.titulo}</Text>
            </View>
            <View style={styles.listItemProductDetailsContainer}>
              <Text style={[styles.productDetails, styles.price]}>{'R$: ' + item.preco}</Text>
            </View>
          </View>
        </View>
        </TouchableHighlight>
  );


  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };

  const refreshListBusca = (data) => {
    console.log(data);
     setProdutos(data)
  };

  const updateSearch = (search) => {
    if (search === ''){
      api.get('produto/')
      .then((res) => {
      // console.log('Produtos listados com sucesso' + res.data)
       setProdutos(res.data)
       console.log(produtos)})
      .catch((err) => {
       console.error("ops! ocorreu um erro" + err);
    });
    } else {
    console.log(search);
    api.get('produto/getByName/' + search)
    .then((res) => {refreshListBusca(res.data)})
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  }
   setSearch(search);
  };

  return (
<View style={styles.container1}>
    <SearchBar
    placeholder='O que você está procurando?'
    lightTheme='true'
    searchIcon={false}
    cancelIcon={false}
    onChangeText={updateSearch}
    value={search}
    >

    </SearchBar>
    <View style={styles.container}>


        <StatusBar barStyle='dark-content' />



        <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}

      />

 
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'darkseagreen',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkseagreen',
  },

  scrollview: {
    marginHorizontal: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',

  },

  listItemContainerLeftChild: {
    padding: 12
  },

  listItemContainerRightChild: {
    height: 100,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: 12,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#CECED2'
  },

  listItemProductNameContainer: {
    width: 150,
    paddingRight: 6
  },

  listItemProductDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  listItemTouch: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 4,
  },
  listItemLeftImage: {
    height: 60,
    width: 60
  },

  productDetails: {
     fontWeight: 'bold'
  },

  price: {
    marginBottom: 5,
    color:'#32a852'

  },

});