import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 23, 45, 67, 89];

export default function MesasScreen() {
  return (
    <View className='p-4 space-y-4 flex-1 overflow-y-scroll'>
      <Text className='text-2xl font-semibold'>Mesas</Text>
      <View className=''>
        {tableNumbers.map((number) => (
          <Link
            key={number}
            href={`/mesas/${number}`}
            className='p-4 rounded-sm bg-blue-100 my-2'
          >
            <Text>Mesa {number}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
}
