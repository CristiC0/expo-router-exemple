# 10 · Erori

**Ce arată:** ce vede utilizatorul când ceva lipsește sau se strică.

| Situația | Unde | Soluția |
| --- | --- | --- |
| lipsește **ecranul** (o adresă fără fișier) | `src/app/+not-found.js` | se afișează pentru orice adresă necunoscută |
| lipsesc **datele** (un id inexistent) | `02-parametri/[id].js` | `if (!produs) return <Text>…</Text>` |
| se strică **codul** (o eroare la render) | `10-erori/strica.js` | `export function ErrorBoundary({ error, retry })` |

## Fișiere speciale

Fișierele al căror nume începe cu `+` au un rol special. `+not-found.js` stă în rădăcina
`src/app`, deci prinde orice adresă greșită din aplicație.

## `ErrorBoundary`

Pe lângă `export default`, un fișier de rută poate exporta `ErrorBoundary`. Dacă ecranul
aruncă o eroare la render, Expo Router o afișează în locul lui. Restul aplicației merge mai
departe.

- `error`: eroarea aruncată
- `retry`: încearcă din nou să randeze ecranul

> În development, o eroare la render deschide întâi ecranul roșu **Render Error** (LogBox).
> Apăsați **Dismiss**: dedesubt este `ErrorBoundary`. Într-un build de producție, LogBox nu
> există și utilizatorul vede direct `ErrorBoundary`.

`retry` montează ecranul din nou, deci state-ul lui pornește de la zero. De aceea, în
exemplu, ecranul își revine după "Încercați din nou".
