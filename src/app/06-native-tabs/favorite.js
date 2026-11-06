// /06-native-tabs/favorite
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Favorite() {
  return (
    <SafeAreaView style={stiluri.ecran}>
      <Text style={stiluri.titlu}>Favorite</Text>
      <Text style={stiluri.text}>{'Badge-ul "2" de pe tab vine din NativeTabs.Trigger.Badge.'}</Text>
      <RutaCurenta />
    </SafeAreaView>
  );
}
