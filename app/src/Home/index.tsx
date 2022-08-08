import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import React from 'react'
import { categories } from './categories'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.title}> Bem vindo </Text>
      <Text style={styles.subTitle}> Encontre no mapa um ponto do comércio local </Text>  
      </View>

      <MapView style={styles.map}>
        <Marker coordinate={{
          latitude: 0,
          longitude: 0,
        }}/>
      </MapView>

      <View style={styles.categoryContainer}>
        <FlatList 
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}}></View>} //
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({item}) => (
            <TouchableOpacity
            style={styles.categoryItem}
              key={item.key}
            >
                <Image  style={styles.categoryImage} source={item.image}/>
                <Text style={styles.categoryText}>{item.label}</Text>

            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}