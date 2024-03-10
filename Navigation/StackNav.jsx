// StackNav.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: '',
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
    </Stack.Navigator>
  );
};

export default StackNav;
