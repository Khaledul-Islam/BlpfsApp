// DrawerNav.jsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNav from './StackNav';
import DrawerContent from './DrawerContent';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name='StackNav' component={StackNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
