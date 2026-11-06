// /06-native-tabs/profil
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Profil() {
  return (
    <SafeAreaView style={stiluri.ecran}>
      <Text style={stiluri.titlu}>Profil</Text>
      <Text style={stiluri.text}>Pe Android, NativeTabs acceptă cel mult 5 tab-uri.</Text>
      <RutaCurenta />
    </SafeAreaView>
  );
}
