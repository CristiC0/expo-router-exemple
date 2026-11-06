// Layout-ul rădăcină: rulează primul, înaintea oricărui ecran. Ține locul lui App.js.
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { culori } from '../components/ui';

export default function RootLayout() {
  return (
    // necesar pentru gesture-urile din Drawer (exemplul 07)
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack
        // opțiuni comune pentru TOATE ecranele din această stivă
        screenOptions={{ headerTintColor: culori.primar }}
      >
        {/* Expo Router găsește SINGUR toate fișierele din src/app: nu trebuie să le listăm.
            Aici declarăm doar ecranele care au nevoie de opțiuni cunoscute ÎNAINTE de deschidere
            (presentation, headerShown). Titlurile simple sunt setate în fiecare ecran,
            cu <Stack.Screen options={{ title }} />.
            name = calea fișierului față de acest layout, fără extensie */}

        {/* 05, 06, 07, 09 au propriul _layout, cu propriul header: îl ascundem pe al nostru,
            altfel ar apărea două header-e, unul sub altul */}
        {/* numele unui director cu _layout include și grupul: 05-tabs/(tabs) */}
        <Stack.Screen name="05-tabs/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="06-native-tabs" options={{ headerShown: false }} />
        <Stack.Screen name="07-drawer" options={{ headerShown: false }} />

        {/* 08: modalele stau în stiva RĂDĂCINĂ, ca să acopere tot ecranul.
            presentation trebuie declarat aici: ecranul încă nu e randat când începe animația */}
        <Stack.Screen name="08-modale/cos" options={{ title: 'Coș', presentation: 'modal' }} />
        <Stack.Screen
          name="08-modale/filtre"
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: [0.5, 1], // se oprește la 50% și la 100%
            sheetGrabberVisible: true,
            contentStyle: { backgroundColor: 'white' }, // fundalul întregii foi, nu doar al conținutului
            headerShown: false,
          }}
        />

        <Stack.Screen name="09-protejat" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
