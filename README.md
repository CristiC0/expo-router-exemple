# Exemple Expo Router

## Ce este acest proiect

O aplicație React Native care adună, într-un singur loc, tot ce am învățat despre navigare
la cursul *Dezvoltarea aplicațiilor mobile*: stive, parametri, header, tab-uri, drawer,
modale, ecrane protejate și erori.

Nu este o aplicație "reală", ci o colecție de **10 exemple mici**. Fiecare exemplu este un
director din `src/app`, cu un `README.md` care explică ce arată și ce să încercați. Codul este
comentat în română, ca să îl puteți citi linie cu linie.

Cum îl folosiți:

1. Porniți aplicația pe telefon (pașii de mai jos).
2. Alegeți un exemplu din meniu și apăsați prin el.
3. Deschideți în paralel fișierele lui din `src/app` și citiți ce se întâmplă.
4. Modificați codul și urmăriți efectul: aplicația se reîncarcă singură.

În josul fiecărui ecran vedeți adresa curentă (`usePathname()`) și segmentele ei
(`useSegments()`), ca să știți mereu ce fișier s-a deschis.

## Pornire

Proiectul pornește din șablonul `blank` (JavaScript, fără TypeScript), Expo SDK 58.

```bash
npm install
npx expo start
```

Scanați codul QR cu **Expo Go** (Android) sau cu aplicația Camera (iOS). Folosiți Expo Go
pentru SDK 58: o versiune mai veche nu poate deschide proiectul.

## Cum citiți proiectul

Fiecare exemplu este un director din `src/app`, cu un `README.md` care explică ce arată și ce
să încercați. Deschideți fișierele în editor în timp ce apăsați prin aplicație: în josul
fiecărui ecran apar `usePathname()` și `useSegments()`, ca să vedeți ce fișier s-a deschis.

| Director | Subiect |
| --- | --- |
| [`01-stiva`](src/app/01-stiva) | `Link`, `useRouter`, `push` / `navigate` / `replace` / `back` / `dismissTo`, `Redirect` |
| [`02-parametri`](src/app/02-parametri) | `[id].js`, `[...cale].js`, `useLocalSearchParams`, query, `Link.Preview` |
| [`03-header`](src/app/03-header) | opțiunile header-ului, `headerRight`, `usePreventRemove` |
| [`04-focus`](src/app/04-focus) | `useEffect` față de `useFocusEffect` |
| [`05-tabs`](src/app/05-tabs) | grupuri `(tabs)`, `Tabs`, un stack într-un tab, `anchor` |
| [`06-native-tabs`](src/app/06-native-tabs) | `NativeTabs`, Liquid Glass |
| [`07-drawer`](src/app/07-drawer) | `Drawer`, `useNavigation().openDrawer()` |
| [`08-modale`](src/app/08-modale) | `presentation: 'modal'` și `'formSheet'` |
| [`09-protejat`](src/app/09-protejat) | `Stack.Protected`, login și logout |
| [`10-erori`](src/app/10-erori) | `+not-found.js`, `ErrorBoundary` |

## Structura

```
src/
├── app/                 fiecare fișier de aici este un ecran
│   ├── _layout.js       layout-ul rădăcină: un Stack (ține locul lui App.js)
│   ├── index.js         meniul, adresa "/"
│   ├── +not-found.js    orice adresă care nu are un fișier
│   └── 01-stiva/ … 10-erori/
├── components/          componente refolosite, NU ecrane
└── date/                datele exemplelor
```

## Ce s-a schimbat față de șablonul `blank`

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens \
  expo-linking expo-constants expo-symbols @expo/vector-icons \
  react-native-gesture-handler react-native-reanimated react-native-worklets
```

- `package.json`: `"main": "expo-router/entry"` în loc de `index.js`
- `app.json`: `"scheme": "exemple"` și `"plugins": ["expo-router"]`
- `App.js` și `index.js` au fost șterse: rolul lor îl are `src/app/_layout.js`

## Deep links

`scheme` din `app.json` este prefixul adreselor. Fiecare fișier are deja o adresă:

```bash
# în Expo Go, schema este a lui Expo Go, iar ruta vine după /--/
npx uri-scheme open "exp://192.168.1.10:8081/--/02-parametri/3" --android

# într-un development build, schema este a voastră
adb shell am start -a android.intent.action.VIEW -d "exemple://05-tabs/produse/2"
xcrun simctl openurl booted "exemple://05-tabs/produse/2"
```

Înlocuiți `192.168.1.10:8081` cu adresa afișată de `npx expo start`. Al doilea link deschide
detaliile în tab-ul Produse, iar datorită lui `anchor`, Înapoi duce la listă.

## Hook-urile folosite

| Hook | Ce vă dă | Exemplu |
| --- | --- | --- |
| `useRouter()` | obiectul `router` | 01 |
| `useLocalSearchParams()` | parametrii ecranului curent | 02 |
| `usePathname()` | adresa curentă: `/05-tabs/produse/2` | toate |
| `useSegments()` | adresa ca în fișiere: `['05-tabs', '(tabs)', 'produse', '[id]']` | toate |
| `useFocusEffect()` | un efect care rulează doar cât ecranul e deasupra | 04 |
| `usePreventRemove()` | blochează ieșirea din ecran | 03 |
| `useNavigation()` | navigatorul, pentru ce nu are `router` | 07 |
