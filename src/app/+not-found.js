// Fișierele care încep cu "+" au un rol special.
// +not-found.js se afișează pentru ORICE adresă care nu are un fișier în src/app.
// Încercați: exemplul 10, butonul "Deschide o adresă care nu există".
import { View, Text } from 'react-native';
import { Link, Stack, usePathname } from 'expo-router';
import { stiluri } from '../components/ui';

export default function NuExista() {
  const adresa = usePathname();

  return (
    <View style={stiluri.centrat}>
      <Stack.Screen options={{ title: 'Oops' }} />
      <Text style={stiluri.titlu}>Pagina nu există</Text>
      <Text style={stiluri.explicatie}>Nu există niciun fișier pentru {adresa}</Text>
      {/* dismissTo: scoate ecranele până la meniu. Un Link simplu către "/"
          ar pune o a doua copie a meniului deasupra stivei. */}
      <Link href="/" dismissTo style={stiluri.meniu}>
        Înapoi la meniu
      </Link>
    </View>
  );
}
