// /09-protejat/setari
import { View, Text } from 'react-native';
import { useSesiune } from '../../components/sesiune';
import { Buton, RutaCurenta, stiluri } from '../../components/ui';

export default function Setari() {
  const { iesi } = useSesiune();

  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.text}>
        Apăsați Ieșire: ecranele protejate dispar din stivă, iar aplicația revine singură la login.
      </Text>
      <Buton titlu="Ieșire" varianta="pericol" onPress={iesi} />
      <RutaCurenta />
    </View>
  );
}
