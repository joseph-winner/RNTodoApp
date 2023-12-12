import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class Fallback extends Component {
  render() {
    return (
      <View style={{alignItems:"center"}} >
        <Image source={require("../assets/Fallback.png")} style={{width:300, height:300}} />
        <Text style={{marginTop: 5, fontWeight: "300", fontSize: 20, alignContent: "center"}} >
            Start adding your to-dos
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})