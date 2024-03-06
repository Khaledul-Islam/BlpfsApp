// App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './Navigation/DrawerNav'; // Adjust the path based on your actual file structure
import { AuthProvider } from './Navigation/AuthContext'; 
import Toast from 'react-native-toast-message';
import ToastConfig from './Components/ToastConfig';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
      <Toast config={ToastConfig} />
    </AuthProvider>
  );
}; 

export default App;
