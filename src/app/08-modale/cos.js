// /08-modale/cos?id=1
import { View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { gasesteProdus } from '../../date/produse';
import { Buton, RutaCurenta, stiluri } from '../../components/ui';

export default function Cos() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const produs = gasesteProdus(id);

  return (
    <View style={stiluri.centrat}>
      <Text style={stiluri.titlu}>{produs ? `${produs.nume} e în coș` : 'Coșul este gol'}</Text>
      {/* pe web nu există gestul de închidere: un buton e obligatoriu */}
      <Buton titlu="Închide" onPress={() => router.dismiss()} />
      <RutaCurenta />
    </View>
  );
}
