import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import Episodes from './screens/Episodes';
import EpisodeDetails from './screens/EpisodeDetails';
import Settings from './screens/Settings';
import AboutUs from './screens/AboutUs';
import Programs from './screens/Programs';
import NewsBulletin from './screens/NewsBulletin';
import Collebrations from './screens/Collebrations';
import ContactUs from './screens/ContactUs';
import Preloader from './components/Preloader';
import { PlayerProvider } from './components/PlayerContext';
import FooterPlayer from './components/FooterPlayer';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; // For tablet-sized devices
const isSmallScreen = width <= 768; // For smaller devices like phones

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.closeDrawer()} style={styles.closeButton}>
        <Ionicons name="close" size={30} color="#40003d" />
      </TouchableOpacity>

      <Image
        source={require('./assets/image/logo-dark.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <DrawerItem label="Home" icon="home-outline" onPress={() => navigation.navigate('Home')} />
      {/* <DrawerItem label="Episodes" icon="play-circle-outline" onPress={() => navigation.navigate('Episodes')} />
      <DrawerItem label="Settings" icon="settings-outline" onPress={() => navigation.navigate('Settings')} /> */}
      <DrawerItem label="About Us" icon="information-circle-outline" onPress={() => navigation.navigate('About Us')} />
      <DrawerItem label="Programs" icon="musical-notes-outline" onPress={() => navigation.navigate('Programs')} />
      <DrawerItem label="News Bulletin" icon="newspaper-outline" onPress={() => navigation.navigate('News Bulletin')} />
      <DrawerItem label="Collebrations" icon="happy-outline" onPress={() => navigation.navigate('Collebrations')} />
      <DrawerItem label="Contact Us" icon="call-outline" onPress={() => navigation.navigate('Contact Us')} />
    </View>
  );
}

const DrawerItem = ({ label, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Ionicons name={icon} size={22} color="#40003d" />
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

function EpisodesStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#40003d',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#FFF" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            source={require('./assets/image/logo.png')}
            style={{ height: 50, width: 140 }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',  
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackButton}>
            <Ionicons name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name="EpisodesList" component={Episodes} options={{ title: 'Episodes' }} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
}

function GenericStack({ component, title }) {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#40003d',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
            <Ionicons name="menu" size={28} color="#FFF" />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            source={require('./assets/image/logo.png')}
            style={{ height: 50, width: 140 }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.BackButton}>
            <Ionicons name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name={title} component={component} options={{ title }} />
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
      <Drawer.Screen name="Settings">
        {() => <GenericStack component={Settings} title="Settings" />}
      </Drawer.Screen>
      <Drawer.Screen name="About Us">
        {() => <GenericStack component={AboutUs} title="About Us" />}
      </Drawer.Screen>
      <Drawer.Screen name="Programs">
        {() => <GenericStack component={Programs} title="Programs" />}
      </Drawer.Screen>
      <Drawer.Screen name="News Bulletin">
        {() => <GenericStack component={NewsBulletin} title="News Bulletin" />}
      </Drawer.Screen>
      <Drawer.Screen name="Collebrations">
        {() => <GenericStack component={Collebrations} title="Collebrations" />}
      </Drawer.Screen>
      <Drawer.Screen name="Contact Us">
        {() => <GenericStack component={ContactUs} title="Contact Us" />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PlayerProvider>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <NavigationContainer>
          <DrawerNavigator />
          <FooterPlayer />
          <View style={styles.footer}>
            {['facebook', 'instagram', 'play-circle', 'youtube', 'twitter', 'ellipsis-v'].map((icon, index) => (
              <FontAwesome
                key={index}
                name={icon}
                size={26}
                color={icon === 'play-circle' ? 'yellow' : 'white'}
              />
            ))}
          </View>
        </NavigationContainer>
      )}
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  menuButton: {
    marginRight: 15,
  },
  BackButton: {
    marginLeft: 15,
  },
  logo: {
    width: '100%',
    height: isLargeScreen ? 250 : 180,
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: isLargeScreen ? 16 : 12,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  text: {
    fontSize: isLargeScreen ? 18 : 16,
    color: '#333',
    marginLeft: 15,
  },
  footer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#40003d',
    paddingVertical: 25,
  },
});