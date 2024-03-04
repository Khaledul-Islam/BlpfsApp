// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './DrawerNav'; // Import StackNav

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}; 

export default App;
