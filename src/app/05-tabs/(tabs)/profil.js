// /05-tabs/profil
// Tab-urile NU formează o stivă: fiecare rămâne montat după prima vizită.
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Buton, RutaCurenta, stiluri } from '../../../components/ui';

export default function Profil() {
  const [like, setLike] = useState(0);

  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.titlu}>Ana Popescu</Text>
      <Buton titlu={`Like-uri: ${like}`} onPress={() => setLike(like + 1)} />
      <Text style={stiluri.explicatie}>
        Apăsați de câteva ori, treceți pe alt tab și reveniți: valoarea a rămas. Deschideți un
        produs în tab-ul Produse, veniți aici și reveniți: produsul e tot deschis.
      </Text>
      <RutaCurenta />
    </View>
  );
}
