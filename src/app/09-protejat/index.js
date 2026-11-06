// /09-protejat
// Accesibil doar cu un utilizator logat.
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useSesiune } from '../../components/sesiune';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Acasa() {
  const { utilizator } = useSesiune();

  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.titlu}>Salut, {utilizator}</Text>
      <Text style={stiluri.text}>Încercați Înapoi: nu duce la login, pentru că login nu mai e accesibil.</Text>
      <Link href="/09-protejat/setari" style={stiluri.meniu}>
        Setări
      </Link>
      <RutaCurenta />
    </View>
  );
}
