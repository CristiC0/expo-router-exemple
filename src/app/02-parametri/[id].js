// /02-parametri/42
// Un segment dinamic: [id] se potrivește cu ORICE valoare, iar valoarea ajunge aici
// sub același nume, prin useLocalSearchParams().
import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { gasesteProdus } from '../../date/produse';
import { RutaCurenta, stiluri, culori } from '../../components/ui';

export default function Produs() {
  const { id } = useLocalSearchParams();
  const produs = gasesteProdus(id);

  // [id].js primește și /02-parametri/abc sau id-ul unui produs șters.
  // Fără această verificare, produs.nume ar opri aplicația cu o eroare.
  if (!produs) {
    return (
      <View style={stiluri.centrat}>
        <Stack.Screen options={{ title: 'Inexistent' }} />
        <Text style={stiluri.titlu}>Produsul nu mai există</Text>
        <Text style={stiluri.explicatie}>id = {JSON.stringify(id)}</Text>
      </View>
    );
  }

  return (
    <View style={stiluri.ecran}>
      {/* titlul vine din date. Fără el, header-ul ar afișa "02-parametri/[id]" */}
      <Stack.Screen options={{ title: produs.nume }} />
      <Text style={stiluri.titlu}>{produs.nume}</Text>
      <Text style={stiluri.text}>{produs.descriere}</Text>
      <Text style={[stiluri.titlu, { color: culori.primar }]}>{produs.pret} lei</Text>
      <Text style={stiluri.explicatie}>
        typeof id = {typeof id}. Parametrii sunt mereu string-uri, pentru că fac parte din adresă.
      </Text>
      <RutaCurenta />
    </View>
  );
}
