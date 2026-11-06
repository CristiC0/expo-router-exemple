# 02 · Parametri

**Ce arată:** segmentele dinamice și cum ajunge o valoare din adresă în ecran.

| Fișier | Adresă | Parametri |
| --- | --- | --- |
| `index.js` | `/02-parametri?sort=pret` | `{ sort: 'pret' }` (query) |
| `[id].js` | `/02-parametri/42` | `{ id: '42' }` |
| `fisiere/[...cale].js` | `/02-parametri/fisiere/a/b/c` | `{ cale: ['a', 'b', 'c'] }` |

Toți parametrii se citesc cu același hook: `useLocalSearchParams()`.

## Două moduri de a scrie un `href`

```jsx
<Link href="/02-parametri/42">Cafea</Link>

<Link href={{ pathname: '/02-parametri/[id]', params: { id: produs.id } }}>Cafea</Link>
```

A doua formă construiește adresa din bucăți. Un parametru care nu corespunde unui segment
(`sort`) devine query: `?sort=pret`.

## Reguli

- **Parametrii sunt string-uri.** `42` ajunge `'42'`, un obiect ajunge `"[object Object]"`.
- **Trimiteți id-ul, nu obiectul.** Ecranul își caută singur datele (`gasesteProdus(id)`),
  pentru că un deep link nu poate transporta un obiect.
- **`[id].js` primește orice valoare**, inclusiv un id șters. Verificați `if (!produs)`.
  Încercați `/02-parametri/99`.

## Bonus: previzualizare pe iOS

`Link.Trigger`, `Link.Preview` și `Link.Menu` (ultimul link din listă): apăsare lungă =
ecranul în miniatură, cu un meniu sub el. Pe Android, link-ul merge normal.
