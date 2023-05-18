import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

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
          options={{
            title: 'Meteoro do Mestrão'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Dados') {
            iconName = focused ? 'square' : 'square-outline'
          } else if (route.name === 'Mestre') {
            iconName = focused ? 'person' : 'person-outline'
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Ficha') {
            iconName = focused ? 'file-tray-full' : 'file-tray-full-outline'
          } else if (route.name === 'Criar') {
            iconName = focused ? 'add-circle' : 'add-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="Dados" component={DiceRollScreen} />
      <Tab.Screen name="Mestre" component={GameMasterScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ficha" component={CharacterSheetScreen} />
      <Tab.Screen name="Criar" component={CharacterCreationScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigation
