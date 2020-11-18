import React from 'react';
import {StyleSheet} from 'react-native';

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

export default styles;