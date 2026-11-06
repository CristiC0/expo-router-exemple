// /08-modale
// Un modal este un ecran obișnuit, afișat altfel. "Altfel" se declară în layout:
// vedeți presentation pentru 08-modale/cos și 08-modale/filtre în src/app/_layout.js.
import { View, Text } from 'react-native';
import { Stack, Link } from 'expo-router';
import { produse } from '../../date/produse';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Magazin() {
  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: 'Modale' }} />
      <Text style={stiluri.text}>{"presentation: 'modal' urcă de jos și acoperă tot:"}</Text>
      {/* parametrii merg și spre un modal: aici, ca query (?id=1) */}
      <Link href={{ pathname: '/08-modale/cos', params: { id: produse[0].id } }} style={stiluri.meniu}>
        Adaugă Cafea în coș
      </Link>

      <Text style={stiluri.text}>{"presentation: 'formSheet' este o foaie care se oprește la 50% și 100%:"}</Text>
      <Link href="/08-modale/filtre" style={stiluri.meniu}>
        Filtre
      </Link>

      <Text style={stiluri.explicatie}>
        Pe iOS se închid trăgându-le în jos, pe Android cu Înapoi, iar din cod cu router.dismiss().
      </Text>
      <RutaCurenta />
    </View>
  );
}
