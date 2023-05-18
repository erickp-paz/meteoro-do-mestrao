import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

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
    <View style={styles.container}>
      <TouchableOpacity style={styles.topItem} onPress={navigateToProfile}>
        <Ionicons name="person" size={20} style={{ marginRight: 5 }} />
        <Text style={styles.topItemText}>Perfil</Text>
      </TouchableOpacity>

      <View style={styles.middleContainer}>
        <TouchableOpacity
          style={styles.middleItem}
          onPress={navigateToRpgSystems}
        >
          <Ionicons name="book" size={15} style={{ marginRight: 5 }} />
          <Text style={styles.middleItemText}>Sistemas de RPG</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.middleItem}
          onPress={navigateToRpgSystems}
        >
          <MaterialCommunityIcons name="sword-cross" size={15} color="black" />
          <Text style={styles.middleItemText}>Bestiário</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bottomItem} onPress={navigateToSettings}>
        <Ionicons name="settings" size={20} style={{ marginRight: 5 }} />
        <Text style={styles.bottomItemText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  topItem: {
    alignSelf: 'flex-start',
    paddingTop: 15,
    flexDirection: 'row'
  },
  topItemText: {
    fontSize: 20
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  middleItem: {
    marginBottom: 15,
    flexDirection: 'row'
  },
  middleItemText: {
    fontSize: 18,
    paddingLeft: 15
  },
  bottomItem: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginBottom: 15,
    flexDirection: 'row'
  },
  bottomItemText: {
    fontSize: 20
  }
})

export default DrawerContent
