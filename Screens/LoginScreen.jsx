// LoginScreen.jsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import Loader from '../Components/Loader';
import {useAuthDispatch} from '../Navigation/AuthContext';
import Toast from 'react-native-toast-message';
import appConfig from '../app.json';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const authDispatch = useAuthDispatch();

  const handleLogin = async () => {
    try {
      const apiUrl = 'user/ApiLogin';
      const baseUrl = appConfig.apiBaseURL;
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
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid credentials. Please try again.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred during login. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Asset/Login.png")} />
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.title}>User Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={username}
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {loading && <Loader loading={loading} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  image: {
    marginBottom: 30,
  },
  inputView: {
    backgroundColor: '#FAF9F9',
    borderRadius: 30,
    borderColor: '#c9bfbf',
    borderWidth: 2,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E66605',
  },
  loginText:{
    color:'black',
    fontWeight:'bold'
  }
});

export default LoginScreen;
