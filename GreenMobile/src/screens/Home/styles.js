import React from 'react';
import {StyleSheet} from 'react-native';

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
        flex: 1,
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
        color: '#32a852'

    },

});

export default styles;