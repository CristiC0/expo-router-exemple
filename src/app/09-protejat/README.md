# 09 · Ecrane protejate

**Ce arată:** ecrane accesibile doar după login, fără niciun `router.replace`.

| Fișier | Adresă | Accesibil când |
| --- | --- | --- |
| `_layout.js` | `Stack` cu `Stack.Protected` | |
| `login.js` | `/09-protejat/login` | nu e nimeni logat |
| `index.js` | `/09-protejat` | e cineva logat |
| `setari.js` | `/09-protejat/setari` | e cineva logat |

```jsx
<Stack>
  <Stack.Protected guard={!utilizator}>
    <Stack.Screen name="login" />
  </Stack.Protected>
  <Stack.Protected guard={!!utilizator}>
    <Stack.Screen name="index" />
    <Stack.Screen name="setari" />
  </Stack.Protected>
</Stack>
```

Când `guard` devine `false`, ecranele din interior dispar din stivă, iar navigatorul mută
singur utilizatorul pe primul ecran accesibil.

- Login → `intra('Ana')` → login devine inaccesibil → apare Acasă. Înapoi nu duce la login.
- Setări → `iesi()` → Acasă și Setări devin inaccesibile → apare login.

`utilizator` vine dintr-un Context mic (`src/components/sesiune.js`). Autentificarea reală
și starea globală vin mai târziu în curs.

> Verificarea se face doar în aplicație. Datele private le protejează **serverul**.
