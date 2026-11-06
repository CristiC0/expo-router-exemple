// /01-stiva
// Două moduri de a naviga: Link (ce apasă utilizatorul) și router (din cod, în handler-e).
import { View, Text, Pressable } from 'react-native';
import { Stack, Link, useRouter } from 'expo-router';
import { Buton, RutaCurenta, stiluri, culori } from '../../components/ui';

export default function Stiva() {
  const router = useRouter();

  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: 'Stiva' }} />
      <Text style={stiluri.text}>1. Link, ca text care se poate apăsa:</Text>
      <Link href="/01-stiva/ecran/1" style={stiluri.meniu}>
        Deschide Ecranul 1
      </Link>

      <Text style={stiluri.text}>2. Link cu asChild, pe un Pressable:</Text>
      <Link href="/01-stiva/ecran/1" asChild>
        <Pressable style={{ padding: 14, borderRadius: 10, backgroundColor: culori.fundal }}>
          <Text>Card care deschide Ecranul 1</Text>
        </Pressable>
      </Link>

      <Text style={stiluri.text}>3. Din cod, cu useRouter():</Text>
      <Buton titlu="router.push('/01-stiva/ecran/1')" onPress={() => router.push('/01-stiva/ecran/1')} />

      <Text style={stiluri.text}>4. O adresă veche, care face Redirect:</Text>
      {/* Atenție la adresele relative: ele pornesc de la ADRESĂ, nu de la fișier.
          Adresa acestui ecran este /01-stiva (fără "/" la final), deci "./vechi"
          ar deschide /vechi, nu /01-stiva/vechi. Aici scriem adresa întreagă. */}
      <Link href="/01-stiva/vechi" style={stiluri.meniu}>
        Deschide /01-stiva/vechi
      </Link>

      <RutaCurenta />
    </View>
  );
}
