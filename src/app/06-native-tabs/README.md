# 06 · NativeTabs

**Ce arată:** bara de tab-uri a sistemului, nu una desenată în JavaScript.

| Fișier | Adresă |
| --- | --- |
| `_layout.js` | `NativeTabs` |
| `index.js` | `/06-native-tabs` |
| `favorite.js` | `/06-native-tabs/favorite` |
| `profil.js` | `/06-native-tabs/profil` |

```jsx
import { NativeTabs } from 'expo-router/native-tabs';

<NativeTabs.Trigger name="index">
  <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
  <NativeTabs.Trigger.Label>Acasă</NativeTabs.Trigger.Label>
</NativeTabs.Trigger>
```

- `sf`: un SF Symbol (iOS). `md`: un Material Symbol (Android, cere `expo-symbols`).
- Pe iOS 26 bara este din **Liquid Glass**; `minimizeBehavior="onScrollDown"` o micșorează la scroll.
- Până la SDK 57, importul era `expo-router/unstable-native-tabs`.

## `Tabs` sau `NativeTabs`?

| | `Tabs` (05) | `NativeTabs` (06) |
| --- | --- | --- |
| Aspect | la fel peste tot, desenat de voi | exact ca aplicațiile sistemului |
| Liquid Glass | cel mult imitat | automat |
| Header | inclus | puneți un `Stack` în tab |
| Personalizare | orice componentă | ce permite platforma |
| Câte tab-uri | oricâte | cel mult 5 pe Android |

Alegeți varianta nativă, dacă designul nu cere o bară complet diferită.

> Fără header, conținutul ar intra sub status bar. De aceea ecranele folosesc
> `SafeAreaView` din `react-native-safe-area-context`.

> Simulatorul iOS din Expo Snack e mai vechi de iOS 26: Liquid Glass se vede doar pe un
> dispozitiv sau simulator cu iOS 26.

> Bara nativă urmează tema **sistemului**. Pe un telefon în dark mode ar fi neagră sub
> ecranele noastre albe, de aceea `_layout.js` îi dă `backgroundColor="white"`.
