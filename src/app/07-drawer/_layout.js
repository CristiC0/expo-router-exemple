// src/app/07-drawer/_layout.js
// Un layout cu <Drawer />: fiecare Drawer.Screen devine o intrare în meniul lateral.
// Cere react-native-gesture-handler, react-native-reanimated și react-native-worklets
// (instalate cu npx expo install) și GestureHandlerRootView în layout-ul rădăcină.
//
// Pentru o aplicație nouă, pe telefon, preferați tabs: pe iOS swipe-ul din margine
// înseamnă deja Înapoi, iar Material 3 Expressive renunță la drawer.
import { Drawer } from 'expo-router/drawer';
import { ButonMeniu, culori } from '../../components/ui';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: culori.primar,
        headerTintColor: culori.primar,
        // butonul ☰ din stânga îl adaugă Drawer singur
        headerRight: () => <ButonMeniu />,
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Acasă', drawerLabel: 'Acasă' }} />
      <Drawer.Screen name="comenzi" options={{ title: 'Comenzile mele', drawerLabel: 'Comenzi' }} />
      <Drawer.Screen name="setari" options={{ title: 'Setări', drawerLabel: 'Setări' }} />
    </Drawer>
  );
}
