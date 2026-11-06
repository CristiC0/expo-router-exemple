// /07-drawer/comenzi
import { View, Text } from 'react-native';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Comenzi() {
  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.text}>Nicio comandă încă.</Text>
      <RutaCurenta />
    </View>
  );
}
