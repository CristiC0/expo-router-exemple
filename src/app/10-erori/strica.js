// /10-erori/strica
// Pe lângă ecran (export default), un fișier din src/app poate exporta ErrorBoundary.
// Dacă ecranul aruncă o eroare la render, Expo Router afișează ErrorBoundary în locul lui,
// iar restul aplicației (header-ul, celelalte ecrane) continuă să funcționeze.
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { Buton, stiluri, culori } from '../../components/ui';

export function ErrorBoundary({ error, retry }) {
  return (
    <View style={stiluri.centrat}>
      <Text style={[stiluri.titlu, { color: culori.pericol }]}>Ceva s-a stricat</Text>
      {/* error este eroarea aruncată */}
      <Text style={stiluri.text}>{error.message}</Text>
      {/* retry montează ecranul din nou, cu state-ul de la zero (stricat = false) */}
      <Buton titlu="Încercați din nou" onPress={retry} />
    </View>
  );
}

export default function Strica() {
  const [stricat, setStricat] = useState(false);

  // o eroare aruncată la render: ca un produs.nume când produs este undefined
  if (stricat) {
    throw new Error('Nu am putut încărca datele produsului.');
  }

  return (
    <View style={stiluri.centrat}>
      <Stack.Screen options={{ title: 'Un ecran care se strică' }} />
      <Text style={stiluri.text}>Ecranul funcționează. Apăsați butonul ca să-l stricați.</Text>
      <Buton titlu="Strică ecranul" varianta="pericol" onPress={() => setStricat(true)} />
    </View>
  );
}
