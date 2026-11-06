# 07 · Drawer

**Ce arată:** meniul lateral.

| Fișier | Adresă |
| --- | --- |
| `_layout.js` | `Drawer` |
| `index.js` | `/07-drawer` |
| `comenzi.js` | `/07-drawer/comenzi` |
| `setari.js` | `/07-drawer/setari` |

```jsx
import { Drawer } from 'expo-router/drawer';
```

Fiecare `Drawer.Screen` devine o intrare în meniu. Butonul ☰ din header îl adaugă singur.

## Dependențe

`react-native-gesture-handler`, `react-native-reanimated`, `react-native-worklets`, instalate
cu `npx expo install`, plus `GestureHandlerRootView` în `src/app/_layout.js`.

## `useNavigation()`

`router` nu are o metodă pentru meniu. `useNavigation()` întoarce navigatorul în care se află
ecranul (aici, drawer-ul), cu metodele lui: `openDrawer()`, `closeDrawer()`, `toggleDrawer()`.

## Când îl folosiți

Rar, pe telefon. Pe iOS swipe-ul din margine înseamnă deja Înapoi, iar ghidurile Apple
recomandă tabs. Pe Android, Material 3 Expressive renunță la drawer în favoarea unei
navigation rail. Îl veți întâlni în aplicații mai vechi și în cele cu multe secțiuni.

> Pe Android cu navigare prin gesturi, swipe-ul pornit chiar de pe marginea ecranului este
> gestul de Înapoi al sistemului, nu deschide meniul. Porniți swipe-ul puțin mai spre interior.
