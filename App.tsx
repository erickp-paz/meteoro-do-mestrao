import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from './src/components/DrawerContent'
import GameMasterScreen from './src/screens/GameMasterScreen'
import CharacterSheetScreen from './src/screens/CharacterSheetScreen'
import HomeScreen from './src/screens/HomeScreen'
import DiceRollScreen from './src/screens/DiceRollScreen'
import CharacterCreationScreen from './src/screens/CharacterCreationScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={DrawerContent}>
          <Drawer.Screen
            name="GameMaster"
            component={GameMasterScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="CharacterSheet"
            component={CharacterSheetScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="DiceRoll"
            component={DiceRollScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="cube" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="Character"
            component={CharacterCreationScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person-add" color={color} size={size} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
