// /01-stiva/ecran/1, /01-stiva/ecran/2, ...
// Locul de joacă pentru metodele lui router. Încercați fiecare buton și urmăriți
// cifra din header și contorul: fiecare ecran din stivă își păstrează propriul state.
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Buton, RutaCurenta, stiluri, culori } from '../../../components/ui';

export default function Ecran() {
  const router = useRouter();
  // parametrii din adresă sunt string-uri: '1', nu 1
  const { n } = useLocalSearchParams();
  const numar = Number(n);
  const urmatorul = `/01-stiva/ecran/${numar + 1}`;

  // state local: rămâne neschimbat cât timp ecranul e în stivă, chiar dacă e acoperit
  const [apasari, setApasari] = useState(0);

  return (
    <View style={stiluri.ecran}>
      {/* Stack.Screen într-un ecran nu afișează nimic: doar setează opțiunile ecranului */}
      <Stack.Screen options={{ title: `Ecranul ${numar}` }} />

      <Text style={local.numar}>{numar}</Text>

      <Pressable style={local.contor} onPress={() => setApasari(apasari + 1)}>
        <Text>Apăsări pe acest ecran: {apasari}</Text>
      </Pressable>

      <View style={local.grila}>
        {/* adaugă un ecran nou deasupra, de fiecare dată */}
        <Buton titlu="push(+1)" onPress={() => router.push(urmatorul)} />
        {/* adresa curentă e deja deasupra: navigate nu face nimic */}
        <Buton titlu="navigate(același)" onPress={() => router.navigate(`/01-stiva/ecran/${numar}`)} />
        {/* push al aceluiași ecran: apare a doua oară */}
        <Buton titlu="push(același)" onPress={() => router.push(`/01-stiva/ecran/${numar}`)} />
        {/* pune ecranul nou ÎN LOCUL celui curent */}
        <Buton titlu="replace(+1)" onPress={() => router.replace(urmatorul)} />
        {/* canGoBack() spune dacă există ceva în spate */}
        <Buton titlu="back()" activ={router.canGoBack()} onPress={() => router.back()} />
        {/* scoate ecrane până ajunge la cel indicat */}
        <Buton titlu="dismissTo('/01-stiva')" onPress={() => router.dismissTo('/01-stiva')} />
        {/* revine la primul ecran al stivei: meniul */}
        <Buton titlu="dismissAll()" onPress={() => router.dismissAll()} />
        {/* schimbă parametrii ecranului curent, fără navigare */}
        <Buton titlu="setParams(n+10)" onPress={() => router.setParams({ n: String(numar + 10) })} />
      </View>

      <Text style={stiluri.explicatie}>
        Faceți push de câteva ori, apăsați contorul, apoi back(): contorul ecranului de dedesubt a
        rămas cum era.
      </Text>

      <RutaCurenta />
    </View>
  );
}

const local = StyleSheet.create({
  numar: { fontSize: 48, fontWeight: 'bold', color: culori.primar, textAlign: 'center' },
  contor: { padding: 12, borderRadius: 8, backgroundColor: culori.fundal, alignItems: 'center' },
  grila: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
