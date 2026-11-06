// /02-parametri/fisiere/a/b/c
// [...cale].js prinde oricâte segmente, iar parametrul este un ARRAY: ['a', 'b', 'c'].
import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { RutaCurenta, stiluri } from '../../../components/ui';

export default function Fisier() {
  const { cale } = useLocalSearchParams();

  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: cale.at(-1) }} />
      <Text style={stiluri.text}>cale = {JSON.stringify(cale)}</Text>
      {cale.map((segment, i) => (
        <Text key={i} style={[stiluri.text, { paddingLeft: i * 16 }]}>
          {i === cale.length - 1 ? '📄' : '📁'} {segment}
        </Text>
      ))}
      <RutaCurenta />
    </View>
  );
}
