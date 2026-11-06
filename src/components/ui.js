// Componente mici refolosite de toate exemplele.
// Stau în src/components, nu în src/app: altfel Expo Router le-ar trata drept ecrane.
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Link, usePathname, useSegments } from 'expo-router';

export const culori = {
  primar: '#4f46e5',
  fundal: '#eef2ff',
  text: '#111827',
  gri: '#6b7280',
  pericol: '#dc2626',
};

export function Buton({ titlu, onPress, activ = true, varianta = 'primar' }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!activ}
      style={({ pressed }) => [
        stiluri.buton,
        varianta === 'pericol' && { backgroundColor: culori.pericol },
        !activ && stiluri.inactiv,
        pressed && { opacity: 0.7 },
      ]}
    >
      <Text style={stiluri.textButon}>{titlu}</Text>
    </Pressable>
  );
}

// Un Link care arată ca un card. asChild trimite apăsarea direct la Pressable.
export function CardLink({ href, titlu, descriere }) {
  return (
    <Link href={href} asChild>
      <Pressable style={({ pressed }) => [stiluri.card, pressed && { opacity: 0.7 }]}>
        <Text style={stiluri.cardTitlu}>{titlu}</Text>
        {descriere ? <Text style={stiluri.cardDescriere}>{descriere}</Text> : null}
      </Pressable>
    </Link>
  );
}

// Arată unde ne aflăm: adresa (usePathname) și segmentele, ca în fișiere (useSegments).
export function RutaCurenta() {
  const adresa = usePathname();
  const segmente = useSegments();
  return (
    <View style={stiluri.ruta}>
      <Text style={stiluri.rutaText}>usePathname(): {adresa}</Text>
      <Text style={stiluri.rutaText}>useSegments(): {JSON.stringify(segmente)}</Text>
    </View>
  );
}

// Buton pentru header-ele din layout-urile imbricate, care nu au săgeată înapoi
// pe primul ecran. dismissTo scoate ecrane din stivă până ajunge la meniu.
export function ButonMeniu() {
  return (
    <Link href="/" dismissTo style={stiluri.meniu}>
      Meniu
    </Link>
  );
}

export const stiluri = StyleSheet.create({
  ecran: { flex: 1, padding: 20, gap: 12, backgroundColor: 'white' },
  // Pentru contentContainerStyle al unui ScrollView: flexGrow, NU flex: 1.
  // flex: 1 ar limita conținutul la înălțimea ecranului, iar lista nu s-ar mai derula.
  continut: { flexGrow: 1, padding: 20, gap: 12, backgroundColor: 'white' },
  centrat: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 14, backgroundColor: 'white' },
  titlu: { fontSize: 26, fontWeight: 'bold', color: culori.text },
  text: { fontSize: 16, color: culori.text, lineHeight: 22 },
  explicatie: { fontSize: 14, color: culori.gri, lineHeight: 20 },
  buton: { backgroundColor: culori.primar, paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, alignItems: 'center' },
  inactiv: { backgroundColor: '#c7d2fe' },
  textButon: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  card: { padding: 16, borderRadius: 12, backgroundColor: culori.fundal, gap: 4 },
  cardTitlu: { fontSize: 17, fontWeight: 'bold', color: culori.text },
  cardDescriere: { fontSize: 14, color: culori.gri },
  ruta: { marginTop: 'auto', padding: 10, borderRadius: 8, backgroundColor: '#f3f4f6' },
  rutaText: { fontFamily: 'monospace', fontSize: 12, color: culori.gri },
  meniu: { color: culori.primar, fontSize: 16, fontWeight: '600', paddingHorizontal: 8 },
});
