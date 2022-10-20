import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.containerTitle}>
                <Text  style={styles.titleCard}> {props.name} </Text>
                <Text  style={styles.speciesCard}> {props.species} </Text>
            </View>   
            <View>
                <Image source={{ uri: props.uri }} style={styles.image} />
                <Text style={styles.priceCard}> Precio: ${props.price * 1003} </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 350,
        border: '1px solid black',
        borderWidth: 3,
        marginBottom: 20,
        
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    speciesCard: {
        fontSize: 15,
        marginVertical: 15,
    },
    image: {
        height: '70%', // corrección para movil.-
    },
    priceCard: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '900',
        marginTop: 15,
    }
});

export default Card