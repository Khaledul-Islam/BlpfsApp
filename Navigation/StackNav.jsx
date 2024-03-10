// StackNav.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useAuthDispatch } from '../Navigation/AuthContext';
import appConfig from '../app.json';
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const authDispatch = useAuthDispatch();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleSignout = async () => {
    try {
      const apiUrl = 'user/ApiSignOut';
      const baseUrl = appConfig.apiBaseURL; 
      const response = true;
      // Assuming the signout API returns a success status
      if (response) {
        authDispatch({ type: 'LOGOUT' });
        navigation.navigate('Login');
      } 
    } catch (error) {
      Toast.show({
        type:'error',
        text1:'Error',
        text2:'Signout Error.',        
      })
    }
  };

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Login',
          headerShown: false,
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
          headerRight: () => (
            <FontAwesome
              name='sign-out'
              size={30}
              style={{ color: 'black'}}
              onPress={handleSignout} 
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
