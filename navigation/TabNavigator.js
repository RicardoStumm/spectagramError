import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
//import { RFValue } from 'react-native-responsive-fontsize'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import Profile from '../screens/Profile'
//import firebase from 'firebase'

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOption={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Feed') {
            iconName = focused ? 'book' : 'book-outline'
          } else if (route.name === 'CreatePost') {
            iconName = focused ? 'create' : 'create-outiline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CriarPost" component={CreatePost} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;