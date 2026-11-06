# 03 · Header

**Ce arată:** cum se configurează header-ul și cum blocați ieșirea dintr-un formular.

| Fișier | Adresă | Ce conține |
| --- | --- | --- |
| `index.js` | `/03-header` | opțiuni de header schimbate din state |
| `editare.js` | `/03-header/editare` | `headerRight` + `usePreventRemove` |

## Unde se setează opțiunile

- **În layout, pentru toate ecranele:** `screenOptions` pe `<Stack>` (culoarea din `src/app/_layout.js`).
- **În layout, pentru un ecran:** `<Stack.Screen name="08-modale/cos" options={{ presentation: 'modal' }} />`.
  `name` este calea fișierului față de layout, fără extensie. Ecranul **nu** trebuie listat ca să existe:
  Expo Router găsește singur fișierele. Îl listăm doar pentru opțiuni care trebuie știute înainte
  să se deschidă ecranul (`presentation`, `headerShown`).
- **În ecran, din datele lui:** `<Stack.Screen options={{ title: 'Header' }} />` randat în ecran.
  Nu afișează nimic, doar modifică opțiunile. Poate depinde de state. Așa sunt setate titlurile
  în toate exemplele.

## `headerRight`

Primește o **funcție** care întoarce componenta. Fiind declarată în ecran, butonul vede
state-ul ecranului (aici, textul din `TextInput`).

## `usePreventRemove(conditie, callback)`

Cât timp `conditie` este `true`, ecranul nu poate fi închis: nici cu Înapoi pe Android, nici
cu swipe-ul pe iOS, nici cu `router.back()`. În schimb rulează callback-ul.

`repeat()` reia ieșirea întreruptă. Înainte de el, condiția trebuie să devină `false`,
altfel ieșirea ar fi blocată din nou.

Observați și salvarea: `setSalvat(true)`, iar `router.back()` abia într-un `useEffect`,
după ce condiția a devenit `false`.

> `BackHandler` vede doar butonul de pe Android. `usePreventRemove` prinde orice ieșire.

## Un ecran deschis dintr-un deep link

Deschis direct, cu `exemple://03-header/editare`, ecranul de editare nu are nimic dedesubt, iar
`router.back()` ar da eroarea *The action 'GO_BACK' was not handled by any navigator*. De
aceea salvarea verifică întâi `router.canGoBack()` și altfel face `router.replace('/03-header')`.
