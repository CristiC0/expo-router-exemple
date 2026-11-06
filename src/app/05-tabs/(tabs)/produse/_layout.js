// Un Stack ÎN tab-ul Produse. Layout-urile se încadrează unul în altul, ca directoarele:
//   Stack (rădăcina) > Tabs (05-tabs/(tabs)) > Stack (produse)
// Lista și detaliile se deschid în interiorul tab-ului, iar bara rămâne vizibilă.
import { Stack } from 'expo-router';
import { ButonMeniu, culori } from '../../../../components/ui';

// Ecranul pus SUB orice deep link în această stivă.
// exemple://05-tabs/produse/2 deschide detaliile, iar Înapoi duce la listă.
export const unstable_settings = {
  anchor: 'index',
};

export default function ProduseLayout() {
  return (
    <Stack screenOptions={{ headerTintColor: culori.primar }}>
      <Stack.Screen name="index" options={{ title: 'Produse', headerLeft: () => <ButonMeniu /> }} />
    </Stack>
  );
}
