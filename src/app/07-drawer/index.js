// /07-drawer
// router nu are o metodă pentru meniul lateral. Pentru ce ține de un anumit navigator
// folosim useNavigation(), care întoarce navigatorul în care se află ecranul: aici, Drawer.
import { View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { Buton, RutaCurenta, stiluri } from '../../components/ui';

export default function Acasa() {
  const navigation = useNavigation();

  return (
    <View style={stiluri.ecran}>
      <Text style={stiluri.text}>Deschideți meniul cu ☰, cu un swipe din stânga sau din cod:</Text>
      <Buton titlu="navigation.openDrawer()" onPress={() => navigation.openDrawer()} />
      <Buton titlu="navigation.toggleDrawer()" onPress={() => navigation.toggleDrawer()} />
      <RutaCurenta />
    </View>
  );
}
