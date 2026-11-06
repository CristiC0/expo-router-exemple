// /03-header/editare
// 1. Un buton în header (headerRight) care vede state-ul ecranului.
// 2. usePreventRemove: ecranul nu poate fi închis cât timp există modificări nesalvate,
//    nici cu Înapoi, nici cu swipe-ul de pe iOS, nici din cod.
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { Stack, useRouter, usePreventRemove } from 'expo-router';
import { RutaCurenta, stiluri, culori } from '../../components/ui';

export default function Editare() {
  const router = useRouter();
  const [nume, setNume] = useState('');
  const [salvat, setSalvat] = useState(false);

  const nesalvat = nume.length > 0 && !salvat;

  usePreventRemove(nesalvat, ({ repeat }) => {
    Alert.alert('Renunțați?', 'Aveți modificări nesalvate.', [
      { text: 'Rămân', style: 'cancel' },
      {
        text: 'Renunț',
        style: 'destructive',
        onPress: () => {
          // întâi condiția devine false, altfel ieșirea ar fi blocată din nou
          setNume('');
          // repeat() reia exact ieșirea întreruptă: Înapoi, swipe sau router.back()
          repeat();
        },
      },
    ]);
  });

  // După salvare, "nesalvat" devine false, iar abia apoi ieșim.
  // Dacă am apela router.back() direct în handleSalveaza, condiția ar fi încă true
  // și ieșirea ar fi blocată de propriul nostru usePreventRemove.
  useEffect(() => {
    if (!salvat) return;
    // Deschis dintr-un deep link (exemple://03-header/editare), ecranul nu are nimic
    // dedesubt, iar router.back() ar da eroarea "GO_BACK was not handled".
    if (router.canGoBack()) router.back();
    else router.replace('/03-header');
  }, [salvat, router]);

  function handleSalveaza() {
    // aici ar fi un apel către server
    setSalvat(true);
  }

  return (
    <View style={stiluri.ecran}>
      <Stack.Screen
        options={{
          title: 'Editare',
          // headerRight primește o FUNCȚIE care întoarce componenta din dreapta
          headerRight: () => (
            <Pressable onPress={handleSalveaza} disabled={nume.length === 0}>
              <Text style={[local.salveaza, nume.length === 0 && { opacity: 0.4 }]}>Salvează</Text>
            </Pressable>
          ),
        }}
      />

      <TextInput
        value={nume}
        onChangeText={setNume}
        placeholder="Scrieți ceva, apoi încercați să ieșiți"
        style={local.input}
      />
      <Text style={stiluri.explicatie}>
        {nesalvat ? 'Modificări nesalvate: ieșirea este blocată.' : 'Nimic de salvat.'}
      </Text>

      <RutaCurenta />
    </View>
  );
}

const local = StyleSheet.create({
  salveaza: { color: culori.primar, fontWeight: 'bold', fontSize: 16, paddingHorizontal: 8 },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10, padding: 12, fontSize: 16 },
});
