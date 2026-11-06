// /06-native-tabs
// NativeTabs nu are header. Pentru header, puneți un Stack în tab (ca în exemplul 05).
// Aici folosim doar o listă lungă, ca să vedeți bara micșorându-se pe iOS 26.
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButonMeniu, RutaCurenta, stiluri, culori } from '../../components/ui';

const randuri = Array.from({ length: 30 }, (_, i) => `Rândul ${i + 1}`);

export default function Acasa() {
  return (
    // fără header, conținutul ar intra sub status bar: SafeAreaView îl împinge în jos
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
      <ScrollView contentContainerStyle={stiluri.continut}>
        <View style={local.sus}>
          <Text style={stiluri.titlu}>NativeTabs</Text>
          <ButonMeniu />
        </View>
        <Text style={stiluri.explicatie}>Derulați în jos: pe iOS 26 bara de tab-uri se micșorează.</Text>
        <RutaCurenta />
        {randuri.map((r) => (
          <View key={r} style={local.rand}>
            <Text>{r}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const local = StyleSheet.create({
  sus: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rand: { padding: 14, borderRadius: 10, backgroundColor: culori.fundal },
});
