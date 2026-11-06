// src/app/06-native-tabs/_layout.js
// NativeTabs folosește bara SISTEMULUI: UITabBar pe iOS (Liquid Glass pe iOS 26),
// bara Material pe Android. Tabs din exemplul 05 o desenează în JavaScript.
// Până la SDK 57, importul era 'expo-router/unstable-native-tabs'.
import { NativeTabs } from 'expo-router/native-tabs';
import { culori } from '../../components/ui';

export default function NativeTabLayout() {
  return (
    // pe iOS 26, bara se micșorează când derulați lista în jos
    // Bara nativă urmează tema sistemului: pe un telefon în dark mode ar fi neagră,
    // iar ecranele noastre sunt mereu albe. backgroundColor o fixează pe alb.
    <NativeTabs
      tintColor={culori.primar}
      backgroundColor="white"
      indicatorColor={culori.fundal} // pastila din spatele iconiței active (Android)
      minimizeBehavior="onScrollDown"
    >
      <NativeTabs.Trigger name="index">
        {/* sf = SF Symbol (iOS), md = Material Symbol (Android, cere expo-symbols) */}
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        <NativeTabs.Trigger.Label>Acasă</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorite">
        <NativeTabs.Trigger.Icon sf="heart.fill" md="favorite" />
        <NativeTabs.Trigger.Label>Favorite</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Badge>2</NativeTabs.Trigger.Badge>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profil">
        <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
        <NativeTabs.Trigger.Label>Profil</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
