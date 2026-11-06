# 08 · Modale

**Ce arată:** un ecran obișnuit, prezentat altfel.

| Fișier | Adresă | Prezentare |
| --- | --- | --- |
| `index.js` | `/08-modale` | normală |
| `cos.js` | `/08-modale/cos?id=1` | `presentation: 'modal'` |
| `filtre.js` | `/08-modale/filtre` | `presentation: 'formSheet'` |

Fișierele modalelor nu au nimic special. Diferența e declarată în **`src/app/_layout.js`**:

```jsx
<Stack.Screen name="08-modale/cos" options={{ presentation: 'modal' }} />
<Stack.Screen
  name="08-modale/filtre"
  options={{ presentation: 'formSheet', sheetAllowedDetents: [0.5, 1] }}
/>
```

## Modalele stau în stiva rădăcină

Așa acoperă tot, inclusiv o bară de tab-uri. Un modal declarat într-un stack din interiorul
unui tab ar apărea doar în tab.

## Închiderea

- iOS: tras în jos. Android: butonul Înapoi.
- Din cod: `router.dismiss()`.
- Pe web nu există gestul: puneți un buton.

`sheetAllowedDetents` dă înălțimile la care se oprește foaia: aici 50% și 100%.
