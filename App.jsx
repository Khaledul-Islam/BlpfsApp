import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserScreen from './Screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent'
import Entypo from 'react-native-vector-icons/Entypo'
import ProfileScreen from './Screens/ProfileScreen';
import AttendanceScreen from './Screens/AttendanceScreen';

// import Icon from 'react-native-vector-icons/Entypo'

//Stack Navigation portion
const StackNav=()=>{  
  const stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return(
  <stack.Navigator initialRouteName='Home'  >
    <stack.Screen name='Home' component={HomeScreen} options={{
      title:'Home',
      headerStyle:{
        backgroundColor:'orange'
      },
      headerLeft:()=>{
        return(
          <>
            <Entypo
              name='menu'
              size={30}
              onPress={()=> navigation.dispatch(DrawerActions.openDrawer()) }
            />
          </>
        )
      }
      }} />
    <stack.Screen name='User' component={UserScreen} />
    <stack.Screen name='Profile' component={ProfileScreen} />
    <stack.Screen name='Attendance' component={AttendanceScreen} />
  </stack.Navigator>
  )
}

//Drawer Navigation portion
const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props} /> }
    screenOptions={{
      headerShown:false
    }}>
    <Drawer.Screen name='Home' component={StackNav} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}

export default App