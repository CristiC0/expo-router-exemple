// src/app/index.js este adresa "/": primul ecran al aplicației.
import { Stack } from 'expo-router';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { CardLink, stiluri } from '../components/ui';

const exemple = [
  { href: '/01-stiva', titlu: '01 · Stiva', descriere: 'Link, router.push, navigate, replace, back, dismissTo, Redirect' },
  { href: '/02-parametri', titlu: '02 · Parametri', descriere: '[id].js, useLocalSearchParams, query, [...cale].js' },
  { href: '/03-header', titlu: '03 · Header', descriere: 'Stack.Screen în ecran, headerRight, usePreventRemove' },
  { href: '/04-focus', titlu: '04 · useFocusEffect', descriere: 'Ecranele din spate rămân montate' },
  { href: '/05-tabs', titlu: '05 · Tabs', descriere: 'Grup (tabs), Tabs, un Stack într-un tab, anchor' },
  { href: '/06-native-tabs', titlu: '06 · NativeTabs', descriere: 'Bara de tab-uri a sistemului (Liquid Glass pe iOS 26)' },
  { href: '/07-drawer', titlu: '07 · Drawer', descriere: 'Meniul lateral, useNavigation().openDrawer()' },
  { href: '/08-modale', titlu: '08 · Modale', descriere: "presentation: 'modal' și 'formSheet'" },
  { href: '/09-protejat', titlu: '09 · Ecrane protejate', descriere: 'Stack.Protected, login și logout' },
  { href: '/10-erori', titlu: '10 · Erori', descriere: '+not-found.js și ErrorBoundary' },
];

export default function Meniu() {
  return (
    <ScrollView contentContainerStyle={local.lista}>
      <Stack.Screen options={{ title: 'Exemple Expo Router' }} />
      <Text style={stiluri.explicatie}>
        Fiecare exemplu este un director din src/app. Deschideți fișierele în paralel cu aplicația
        și citiți README.md din fiecare director.
      </Text>
      {exemple.map((e) => (
        <CardLink key={e.href} {...e} />
      ))}
    </ScrollView>
  );
}

const local = StyleSheet.create({
  lista: { padding: 16, gap: 10, backgroundColor: 'white' },
});
