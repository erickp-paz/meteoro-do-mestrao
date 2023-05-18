import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const DrawerContent = () => {
  const navigateToProfile = () => {
    // Navegar para a página de edição de perfil
  }

  const navigateToRpgSystems = () => {
    // Navegar para a página de Sistemas de RPG
  }

  const navigateToBestiary = () => {
    // Navegar para a página de Bestiário
  }

  const navigateToSettings = () => {
    // Navegar para a página de configurações
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
