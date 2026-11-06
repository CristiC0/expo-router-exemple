// /02-parametri și /02-parametri?sort=pret
// O listă de produse. Fiecare duce la /02-parametri/<id>, adică la fișierul [id].js.
import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native';
import { Stack, Link, useLocalSearchParams, useRouter } from 'expo-router';
import { produse } from '../../date/produse';
import { Buton, RutaCurenta, stiluri, culori } from '../../components/ui';

export default function ListaProduse() {
  const router = useRouter();
  // "sort" nu corespunde unui segment din adresă, deci vine din query: ?sort=pret
  const { sort } = useLocalSearchParams();

  const lista = sort === 'pret' ? [...produse].sort((a, b) => a.pret - b.pret) : produse;

  return (
    <ScrollView contentContainerStyle={stiluri.continut}>
      <Stack.Screen options={{ title: 'Parametri' }} />
      <View style={local.rand}>
        {/* setParams schimbă query-ul ecranului curent, fără o navigare nouă */}
        <Buton titlu="Sortează după preț" onPress={() => router.setParams({ sort: 'pret' })} />
        <Buton titlu="Fără sortare" onPress={() => router.setParams({ sort: undefined })} />
      </View>

      {lista.map((p) => (
        // href ca obiect: adresa se construiește din bucăți, nu se poate greși o bară.
        // Trimitem DOAR id-ul. Ecranul își găsește singur produsul.
        <Link key={p.id} href={{ pathname: '/02-parametri/[id]', params: { id: p.id } }} asChild>
          <Pressable style={local.card}>
            <Text style={stiluri.cardTitlu}>{p.nume}</Text>
            <Text style={{ color: culori.primar }}>{p.pret} lei</Text>
          </Pressable>
        </Link>
      ))}

      <Text style={stiluri.text}>Aceeași adresă, scrisă direct ca string:</Text>
      <Link href="/02-parametri/1" style={stiluri.meniu}>
        /02-parametri/1
      </Link>

      <Text style={stiluri.text}>Un id care nu există (un link vechi):</Text>
      <Link href="/02-parametri/99" style={stiluri.meniu}>
        /02-parametri/99
      </Link>

      <Text style={stiluri.text}>Catch-all, [...cale].js, prinde oricâte segmente:</Text>
      <Link href="/02-parametri/fisiere/documente/2026/factura.pdf" style={stiluri.meniu}>
        /02-parametri/fisiere/documente/2026/factura.pdf
      </Link>

      <Text style={stiluri.text}>Doar pe iOS: apăsare lungă pentru previzualizare și meniu.</Text>
      <Link href="/02-parametri/2">
        <Link.Trigger>
          <Text style={stiluri.meniu}>Ceai verde (apăsați lung)</Text>
        </Link.Trigger>
        <Link.Preview />
        <Link.Menu>
          <Link.MenuAction title="Sortează după preț" icon="arrow.up.arrow.down" onPress={() => router.setParams({ sort: 'pret' })} />
        </Link.Menu>
      </Link>

      <RutaCurenta />
    </ScrollView>
  );
}

const local = StyleSheet.create({
  rand: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  card: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderRadius: 12, backgroundColor: culori.fundal },
});
