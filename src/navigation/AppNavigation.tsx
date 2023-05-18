import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../src/screens/HomeScreen'
import DiceRollScreen from '../../src/screens/DiceRollScreen'
import DrawerContent from '../../src/components/DrawerContent'
import GameMasterScreen from '../../src/screens/GameMasterScreen'
import CharacterSheetScreen from '../../src/screens/CharacterSheetScreen'
import CharacterCreationScreen from '../../src/screens/CharacterCreationScreen'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ title: 'Home' }}
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
  )
}

const MainTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Dados" component={DiceRollScreen} />
      <Tab.Screen name="Mestre" component={GameMasterScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ficha" component={CharacterSheetScreen} />
      <Tab.Screen name="Criar" component={CharacterCreationScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigation
