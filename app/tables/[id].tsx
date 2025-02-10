import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function TableDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Table Number: {id}</Text>
    </View>
  );
}
