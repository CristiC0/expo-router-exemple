// /10-erori
// Trei plase de siguranță:
//   +not-found.js   când lipsește ECRANUL     (o adresă fără fișier)
//   if (!produs)    când lipsesc DATELE       (vedeți 02-parametri/[id].js)
//   ErrorBoundary   când se strică CODUL      (vedeți 10-erori/strica.js)
import { View, Text } from 'react-native';
import { Stack, Link } from 'expo-router';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Erori() {
  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: 'Erori' }} />
      <Text style={stiluri.text}>1. O adresă pentru care nu există niciun fișier:</Text>
      <Link href="/promotii" style={stiluri.meniu}>
        Deschide /promotii
      </Link>

      <Text style={stiluri.text}>2. Un id care nu există, într-un ecran care există:</Text>
      <Link href="/02-parametri/99" style={stiluri.meniu}>
        Deschide /02-parametri/99
      </Link>

      <Text style={stiluri.text}>3. Un ecran care aruncă o eroare la render:</Text>
      <Link href="/10-erori/strica" style={stiluri.meniu}>
        Deschide ecranul care se strică
      </Link>

      <RutaCurenta />
    </View>
  );
}
