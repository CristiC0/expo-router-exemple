// src/app/05-tabs/(tabs)/_layout.js
// (tabs) este un GRUP: parantezele fac ca directorul să organizeze fișierele,
// dar să NU apară în adresă. (tabs)/profil.js se deschide la /05-tabs/profil.
//
// Tabs desenează bara de jos în JavaScript. Varianta nativă e în exemplul 06.
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButonMeniu, culori } from '../../../components/ui';

// tabBarIcon primește culoarea tab-ului (activ sau inactiv) și dimensiunea
function icon(nume) {
  return function TabIcon({ color, size }) {
    return <Ionicons name={nume} color={color} size={size} />;
  };
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: culori.primar,
        headerTintColor: culori.primar,
        // primul ecran al unui layout imbricat nu are săgeată înapoi: punem noi un buton
        headerLeft: () => <ButonMeniu />,
      }}
    >
      {/* În bară apar ecranele în ordinea declarată aici */}
      <Tabs.Screen name="index" options={{ title: 'Acasă', tabBarIcon: icon('home') }} />
      <Tabs.Screen
        name="produse"
        options={{
          title: 'Produse',
          tabBarIcon: icon('pricetags'),
          // produse/ are propriul Stack, cu propriul header: ascundem header-ul tab-ului
          headerShown: false,
        }}
      />
      <Tabs.Screen name="profil" options={{ title: 'Profil', tabBarIcon: icon('person'), tabBarBadge: 3 }} />
    </Tabs>
  );
}
