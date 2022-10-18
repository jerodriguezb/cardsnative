import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ title }) => {
  return (
    <Text style={styles.text}> {title} </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    marginTop:40,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  }

})

export default Title