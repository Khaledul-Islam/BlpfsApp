// StackNav.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const StackNav = () => {
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <stack.Navigator initialRouteName='Login'>
      <stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerLeft: () => (
            <>
              <Entypo
                name='menu'
                size={30}
                onPress={openDrawer}
              />
            </>
          ),
        }}
      />
    </stack.Navigator>
  );
};

export default StackNav;
