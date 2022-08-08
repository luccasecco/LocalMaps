import {View, Text, SafeAreaView} from 'react-native'
import { styles } from './styles'
import React from 'react'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Text> Bem vindo </Text>
      <Text> Encontre no mapa um ponto do comércio local </Text>  
      </View>
    </SafeAreaView>
  )
}