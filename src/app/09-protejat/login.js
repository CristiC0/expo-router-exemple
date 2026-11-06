// /09-protejat/login
// Observați: după "Intră" nu navigăm nicăieri. Schimbăm doar sesiunea,
// iar Stack.Protected din _layout.js face restul.
import { View, Text } from 'react-native';
import { useSesiune } from '../../components/sesiune';
import { Buton, RutaCurenta, stiluri } from '../../components/ui';

export default function Login() {
  const { intra } = useSesiune();

  return (
    <View style={stiluri.centrat}>
      <Text style={stiluri.titlu}>Bun venit</Text>
      <Buton titlu="Intră ca Ana" onPress={() => intra('Ana')} />
      <Text style={stiluri.explicatie}>
        Încercați să deschideți /09-protejat direct: fără sesiune, ajungeți tot aici.
      </Text>
      <RutaCurenta />
    </View>
  );
}
