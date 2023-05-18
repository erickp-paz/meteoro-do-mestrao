import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, TextInput, View } from 'react-native'

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
            headerTitle: LogoTitle,
            headerRight: SearchBar
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

const LogoTitle = () => {
  return (
    <Image
      source={require('../assets/logo.jpg')}
      style={styles.logo}
      resizeMode="contain"
    />
  )
}

const SearchBar = () => {
  return (
    <View
      style={{
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
      }}
    >
      <Ionicons name="search" size={20} />
      <TextInput
        style={{
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 5,
          width: '60%',
          padding: 5
        }}
        placeholder="Buscar"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 30
  }
})

export default AppNavigation
