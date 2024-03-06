// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './Navigation/DrawerNav'; // Adjust the path based on your actual file structure
import { AuthProvider } from './Navigation/AuthContext'; 

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </AuthProvider>
  );
}; 

export default App;
