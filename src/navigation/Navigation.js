import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Portofolio from '../screens/Portofolio';
import Contact from '../screens/Contact';
import Blog from '../screens/Blog';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function GuestUserDashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let sizeIcon;

          if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            sizeIcon = size + 3;
          } else if (route.name === 'Portofolio') {
            iconName = focused ? 'book' : 'book';
            sizeIcon = size + 3;
          } else if (route.name === 'Contact') {
            iconName = focused ? 'phone' : 'phone';
            sizeIcon = size + 3;
          } else if (route.name === 'Blog') {
            iconName = focused ? 'file' : 'file';
            sizeIcon = size - 3;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={sizeIcon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(147,42,255)',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Portofolio" component={Portofolio} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  );
}

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="GuestUserDashboard"
          component={GuestUserDashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
