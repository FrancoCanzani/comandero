import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useRouter } from 'expo-router';

const allowedNames = ['ayelen', 'vanesa'];

export default function IndexScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    const lowercaseName = name.toLowerCase().trim();

    if (allowedNames.includes(lowercaseName)) {
      setName('');
      router.replace('/(tabs)/tables');
    } else {
      Alert.alert(
        'Error',
        'Tu nombre no esta en la lista de usuarios permitidos'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comandero App</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu nombre'
          value={name}
          onChangeText={setName}
        />
        <Button title='Ingresar' onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
