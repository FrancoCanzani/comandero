import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 23, 45, 67, 89];

export default function TablesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesas</Text>
      <View style={styles.gridContainer}>
        {tableNumbers.map((number) => (
          <Link
            key={number}
            style={styles.tableButton}
            href={`/tables/${number}`}
          >
            <Text style={styles.buttonText}>Mesa {number}</Text>
          </Link>
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
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
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
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
