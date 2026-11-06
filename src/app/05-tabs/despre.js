// /05-tabs/despre
// Acest fișier e lângă grupul (tabs), nu în el. Directorul 05-tabs nu are _layout,
// deci ecranul face parte din stiva RĂDĂCINĂ și se deschide peste tot, inclusiv peste bară.
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Despre() {
  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: 'Despre' }} />
      <Text style={stiluri.text}>Bara de tab-uri nu se mai vede: suntem în stiva rădăcină, deasupra tab-urilor.</Text>
      <RutaCurenta />
    </View>
  );
}
