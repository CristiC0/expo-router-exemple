// /04-focus
// Un ecran peste care s-a deschis altul rămâne MONTAT, iar efectele lui continuă să ruleze.
// useEffect:      pornește la mount,             se oprește la unmount
// useFocusEffect: pornește când ecranul e deasupra, se oprește când e acoperit
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, Link, useFocusEffect } from 'expo-router';
import { RutaCurenta, stiluri, culori } from '../../components/ui';

export default function DouaCronometre() {
  const [cuEffect, setCuEffect] = useState(0);
  const [cuFocus, setCuFocus] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCuEffect((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // Funcția TREBUIE învelită în useCallback. Altfel ar fi una nouă la fiecare render,
  // iar intervalul ar fi oprit și repornit la fiecare secundă.
  useFocusEffect(
    useCallback(() => {
      const id = setInterval(() => setCuFocus((n) => n + 1), 1000);
      return () => clearInterval(id);
    }, []),
  );

  return (
    <View style={stiluri.ecran}>
      <Stack.Screen options={{ title: 'useFocusEffect' }} />
      <View style={local.rand}>
        <View style={local.cronometru}>
          <Text style={local.numar}>{cuEffect}</Text>
          <Text style={local.eticheta}>useEffect</Text>
        </View>
        <View style={local.cronometru}>
          <Text style={local.numar}>{cuFocus}</Text>
          <Text style={local.eticheta}>useFocusEffect</Text>
        </View>
      </View>

      <Link href="/04-focus/altul" style={stiluri.meniu}>
        Deschide alt ecran
      </Link>
      <Text style={stiluri.explicatie}>
        Deschideți alt ecran, așteptați câteva secunde, apoi reveniți: doar cronometrul din
        useFocusEffect a stat pe loc.
      </Text>

      <RutaCurenta />
    </View>
  );
}

const local = StyleSheet.create({
  rand: { flexDirection: 'row', gap: 12, justifyContent: 'center' },
  cronometru: { alignItems: 'center', padding: 16, borderRadius: 12, backgroundColor: culori.fundal, minWidth: 140 },
  numar: { fontSize: 44, fontWeight: 'bold', color: culori.primar },
  eticheta: { fontFamily: 'monospace', color: culori.gri },
});
