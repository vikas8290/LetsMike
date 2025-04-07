import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Episodes from './screens/Episodes';
import EpisodeDetails from './screens/EpisodeDetails';
import Settings from './screens/Settings';
import Preloader from './components/Preloader';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ alignSelf: 'flex-end' }}>
        <Ionicons name="close" size={30} color="#9f2ce3" />
      </TouchableOpacity>

      <Image source={require('./assets/image/logo-dark.jpg')} style={{ width: '100%', height: 80, marginVertical: 20 }} />

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 18, color: '#333' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Episodes')} style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 18, color: '#333' }}>Episodes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontSize: 18, color: '#333' }}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

function EpisodesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Episodes" component={Episodes} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Episodes" component={EpisodesStack} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      )}
    </>
  );
}