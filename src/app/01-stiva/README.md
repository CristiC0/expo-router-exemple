# 01 · Stiva

**Ce arată:** cum se navighează într-un stack, cu `Link` și cu `router`.

| Fișier | Adresă | Ce conține |
| --- | --- | --- |
| `index.js` | `/01-stiva` | `Link` simplu, `Link asChild`, `router.push`, un link către `/01-stiva/vechi` |
| `ecran/[n].js` | `/01-stiva/ecran/1` | locul de joacă pentru toate metodele lui `router` |
| `vechi.js` | `/01-stiva/vechi` | `<Redirect>` către `/01-stiva/ecran/1` |

Directorul **nu are `_layout.js`**, deci ecranele lui fac parte din stiva rădăcină
(`src/app/_layout.js`). Un director fără layout doar organizează adrese.

## Regula

- `Link` pentru ce apasă utilizatorul, `router` (din `useRouter()`) în handler-e.

## Metodele lui `router`

| Metoda | Ce face cu stiva |
| --- | --- |
| `push(href)` | adaugă un ecran deasupra, de fiecare dată |
| `navigate(href)` | ca `push`, dar nu repetă ecranul care e deja deasupra (`Link` îl folosește) |
| `replace(href)` | pune ecranul nou în locul celui curent: Înapoi nu mai ajunge la el |
| `back()` | scoate ecranul de deasupra |
| `canGoBack()` | `true` dacă există ceva în spate |
| `dismissTo(href)` | scoate ecrane până ajunge la cel indicat |
| `dismissAll()` | revine la primul ecran al stivei |
| `setParams({...})` | schimbă parametrii ecranului curent, fără navigare |

Aceleași operații există și ca props pe `Link`: `<Link push>`, `<Link replace>`, `<Link dismissTo>`.

## Încercați

1. `push(+1)` de trei ori, apăsați contorul pe fiecare ecran, apoi `back()`: fiecare ecran și-a păstrat contorul.
2. `navigate(același)`: nu se întâmplă nimic. `push(același)`: același ecran apare a doua oară.
3. `replace(+1)`, apoi `back()`: ecranul înlocuit a dispărut din istorie.
4. Din meniu, deschideți `/01-stiva/vechi`: ajungeți la Ecranul 1, iar Înapoi nu trece prin `vechi`.

## Capcană: adresele relative

Un `href` relativ pornește de la **adresa** ecranului, nu de la fișier. `01-stiva/index.js`
are adresa `/01-stiva`, fără `/` la final, așa că `<Link href="./vechi">` deschide `/vechi`
(adică `+not-found`), nu `/01-stiva/vechi`. Când nu sunteți siguri, scrieți adresa întreagă.
