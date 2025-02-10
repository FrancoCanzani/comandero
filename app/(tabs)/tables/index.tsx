import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TablesScreen() {
  const router = useRouter();

  const handleTableSelect = (tableNumber: number) => {
    router.push(`/tables/${tableNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesas</Text>
      <View style={styles.gridContainer}>
        {tableNumbers.map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.tableButton}
            onPress={() => handleTableSelect(number)}
          >
            <Text style={styles.buttonText}>Mesa {number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  tableButton: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
