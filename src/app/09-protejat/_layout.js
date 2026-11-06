// src/app/09-protejat/_layout.js
// Stack.Protected permite accesul la ecranele din interior DOAR cât timp guard este true.
// Când utilizatorul se loghează, login devine inaccesibil și navigatorul trece singur la
// ecranul de acasă. La ieșire, revine singur la login. Niciun router.replace.
//
// Atenție: verificarea se face doar în aplicație. Datele private le protejează serverul.
import { Stack } from 'expo-router';
import { SesiuneProvider, useSesiune } from '../../components/sesiune';
import { ButonMeniu, culori } from '../../components/ui';

export default function ProtejatLayout() {
  // Provider-ul trebuie să fie DEASUPRA componentei care citește sesiunea
  return (
    <SesiuneProvider>
      <Ecrane />
    </SesiuneProvider>
  );
}

function Ecrane() {
  const { utilizator } = useSesiune();

  return (
    <Stack screenOptions={{ headerTintColor: culori.primar }}>
      <Stack.Protected guard={!utilizator}>
        <Stack.Screen name="login" options={{ title: 'Autentificare', headerLeft: () => <ButonMeniu /> }} />
      </Stack.Protected>

      <Stack.Protected guard={!!utilizator}>
        <Stack.Screen name="index" options={{ title: 'Acasă', headerLeft: () => <ButonMeniu /> }} />
        <Stack.Screen name="setari" options={{ title: 'Setări' }} />
      </Stack.Protected>
    </Stack>
  );
}
