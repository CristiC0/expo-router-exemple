// /04-focus/altul
// Cât timp sunteți aici, ecranul de dedesubt este acoperit, dar tot montat.
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { stiluri } from '../../components/ui';

export default function Altul() {
  return (
    <View style={stiluri.centrat}>
      <Stack.Screen options={{ title: 'Alt ecran' }} />
      <Text style={stiluri.text}>Așteptați câteva secunde, apoi reveniți.</Text>
    </View>
  );
}
