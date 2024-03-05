// LoginScreen.jsx
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Validate input fields
      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }

      // API endpoint and base URL
      const apiUrl = 'user/ApiLogin';
      const baseUrl = 'https://localhost:44309/';

      //Make API call using Axios
      const response = await axios.post(`${baseUrl}${apiUrl}`, {
          Username: username,
          Password: password,
          RememberMe: true,
          CheckoutAsGuest: false,
          Email: 'k.islam@blmanagedservices.com',
          UsernamesEnabled: true,
          RegistrationType: 1,
          DisplayCaptcha: false,
      });
      // Check the API response
      if (response) {
        // Navigate to the dashboard or homepage on successful login
        navigation.navigate('Home');
      } else {
        // Handle unsuccessful login (show an error message)
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color:'black',    
  },
});

export default LoginScreen;
