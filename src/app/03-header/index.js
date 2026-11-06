// /03-header
// Titlul acestui ecran e setat chiar aici, cu <Stack.Screen> de mai jos.
// Culoarea header-ului vine din screenOptions din src/app/_layout.js și se aplică tuturor ecranelor.
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Buton, RutaCurenta, stiluri, culori } from '../../components/ui';

export default function Header() {
  const [mare, setMare] = useState(false);

  return (
    <View style={stiluri.ecran}>
      {/* Opțiunile setate din ecran le suprascriu pe cele din layout și pot depinde de state */}
      <Stack.Screen
        options={{
          title: 'Header',
          headerLargeTitle: mare, // titlul mare, doar pe iOS
          headerStyle: { backgroundColor: mare ? culori.fundal : 'white' },
        }}
      />

      <Text style={stiluri.text}>
        Header-ul acestui ecran se schimbă din state, fără nicio navigare.
      </Text>
      <Buton titlu={mare ? 'Header normal' : 'Header colorat'} onPress={() => setMare(!mare)} />

      <Text style={stiluri.text}>Un formular cu buton Salvează în header și protecție la ieșire:</Text>
      <Link href="/03-header/editare" style={stiluri.meniu}>
        Deschide editarea
      </Link>

      <RutaCurenta />
    </View>
  );
}
