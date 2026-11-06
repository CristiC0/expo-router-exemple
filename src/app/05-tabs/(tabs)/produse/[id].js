// /05-tabs/produse/42
import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { gasesteProdus } from '../../../../date/produse';
import { RutaCurenta, stiluri, culori } from '../../../../components/ui';

export default function Detalii() {
  const { id } = useLocalSearchParams();
  const produs = gasesteProdus(id);

  if (!produs) {
    return (
      <View style={stiluri.centrat}>
        <Text style={stiluri.titlu}>Produsul nu mai există</Text>
      </View>
    );
  }

  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: produs.nume }} />
      <Text style={stiluri.titlu}>{produs.nume}</Text>
      <Text style={stiluri.text}>{produs.descriere}</Text>
      <Text style={[stiluri.titlu, { color: culori.primar }]}>{produs.pret} lei</Text>
      <Text style={stiluri.explicatie}>Bara de tab-uri a rămas vizibilă: stiva este în interiorul tab-ului.</Text>
      <RutaCurenta />
    </View>
  );
}
