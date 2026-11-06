// /05-tabs/produse
import { FlatList, Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { produse } from '../../../../date/produse';
import { culori } from '../../../../components/ui';

export default function Lista() {
  return (
    <FlatList
      data={produse}
      keyExtractor={(p) => p.id}
      contentContainerStyle={local.lista}
      renderItem={({ item }) => (
        <Link href={`/05-tabs/produse/${item.id}`} asChild>
          <Pressable style={local.card}>
            <Text style={local.nume}>{item.nume}</Text>
            <Text style={{ color: culori.primar }}>{item.pret} lei</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const local = StyleSheet.create({
  lista: { padding: 16, gap: 10, backgroundColor: 'white', flexGrow: 1 },
  card: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderRadius: 12, backgroundColor: culori.fundal },
  nume: { fontSize: 16, fontWeight: 'bold' },
});
