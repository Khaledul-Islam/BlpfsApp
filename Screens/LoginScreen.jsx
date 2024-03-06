// LoginScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import Loader from '../Components/Loader';
import { useAuthDispatch } from '../Navigation/AuthContext';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const authDispatch = useAuthDispatch();

  const handleLogin = async () => {
    try {
      const apiUrl = 'user/ApiLogin';
      const baseUrl = 'http://172.16.231.94/';
      setLoading(true);
      const response = await axios.post(`${baseUrl}${apiUrl}`, {
        email: 'admin@pfs.com',
        password: 'BL@12345',
      });
      if (response.data.IsAuthenticated) {
        authDispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data,
        });
        navigation.navigate('Home');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      Toast.show({
        type:'error',
        text1:'Error',
        text2:'An error occurred during login. Please try again.',        
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {loading && <Loader loading={loading} />}
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
    color: 'black',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'black',
  },
});

export default LoginScreen;
