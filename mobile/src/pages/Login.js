import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', {user});
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', {
      username: user,
    });

    const {_id} = response.data;

    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', {user: _id});
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#Df4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
