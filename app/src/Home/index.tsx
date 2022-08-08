import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import MapView, { Marker } from 'react-native-maps'
import React, { useState, useEffect } from 'react'
import { categories } from './categories'
import { useNavigation } from '@react-navigation/native'

export interface IMarker {
  category: string,
  contacts: string,
  description: string,
  id: string,
  latitude: number,
  longitude: number,
  name: string,
}

export function Home() {
  const [markers, setMarkers] = useState<IMarker[]>([])
  const navigation = useNavigation()

  console.log(markers)

  useEffect(() => {
    fetch("http://172.16.0.1:3000/store").then(async (request) => {
      const data = await request.json()

      setMarkers(data)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Text style={styles.title}> Bem vindo </Text>
      <Text style={styles.subTitle}> Encontre no mapa um ponto do comércio local </Text>  
      </View>

      <MapView style={styles.map}>
        {markers.map((item) => { return (
          <Marker 
          key={item.id}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longitude,
          }}
          onPress={() => {
            navigation.navigate('Detail', item)
          }}
        />
        )})}
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