// /08-modale/filtre
// O foaie (formSheet). Header-ul e ascuns din layout, deci desenăm noi titlul.
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Buton, stiluri } from '../../components/ui';

export default function Filtre() {
  const router = useRouter();

  return (
    <View style={[stiluri.ecran, { flex: 0 }]}>
      <Text style={stiluri.titlu}>Filtre</Text>
      <Text style={stiluri.text}>Trageți foaia în sus sau în jos.</Text>
      <Buton titlu="Aplică" onPress={() => router.dismiss()} />
    </View>
  );
}
