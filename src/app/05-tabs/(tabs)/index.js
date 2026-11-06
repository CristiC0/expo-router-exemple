// /05-tabs (index.js din grupul (tabs))
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { RutaCurenta, stiluri } from '../../../components/ui';

export default function Acasa() {
  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.text}>
        Observați în useSegments() grupul (tabs): el există în fișiere, dar nu și în adresă.
      </Text>

      <Text style={stiluri.text}>Deschide un produs direct, din alt tab:</Text>
      {/* withAnchor pune sub detalii ecranul "anchor" al stivei Produse (lista),
          ca Înapoi să ducă la listă, nu nicăieri */}
      <Link href="/05-tabs/produse/3" withAnchor style={stiluri.meniu}>
        Ciocolată (withAnchor)
      </Link>

      <Text style={stiluri.text}>Un ecran în afara grupului (tabs) acoperă și bara de tab-uri:</Text>
      <Link href="/05-tabs/despre" style={stiluri.meniu}>
        Despre
      </Link>

      <RutaCurenta />
    </View>
  );
}
