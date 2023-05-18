import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

const DrawerContent = () => {
  const navigation = useNavigation()

  const navigateToProfile = () => {
    navigation.navigate('UserProfile')
  }

  const navigateToRpgSystems = () => {
    navigation.navigate('RpgSystems')
  }

  const navigateToBestiary = () => {
    navigation.navigate('Bestiary')
  }

  const navigateToSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <View>
      {/* Campo de perfil */}
      <TouchableOpacity onPress={navigateToProfile}>
        <Text>Perfil</Text>
      </TouchableOpacity>

      {/* Campo de Sistemas de RPG */}
      <TouchableOpacity onPress={navigateToRpgSystems}>
        <Text>Sistemas de RPG</Text>
      </TouchableOpacity>

      {/* Campo de Bestiário */}
      <TouchableOpacity onPress={navigateToBestiary}>
        <Text>Bestiário</Text>
      </TouchableOpacity>

      {/* Campo de Configurações */}
      <TouchableOpacity onPress={navigateToSettings}>
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DrawerContent
