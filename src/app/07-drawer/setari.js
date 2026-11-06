// /07-drawer/setari
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { RutaCurenta, stiluri } from '../../components/ui';

export default function Setari() {
  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.text}>Un Link funcționează și între ecranele unui drawer:</Text>
      <Link href="/07-drawer/comenzi" style={stiluri.meniu}>
        Mergi la Comenzi
      </Link>
      <RutaCurenta />
    </View>
  );
}
