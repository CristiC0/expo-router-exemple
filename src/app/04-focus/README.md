# 04 · `useFocusEffect`

**Ce arată:** ecranele din spate ale unei stive **rămân montate**, iar efectele lor continuă.

| Fișier | Adresă |
| --- | --- |
| `index.js` | `/04-focus` |
| `altul.js` | `/04-focus/altul` |

| Hook | Setup | Cleanup |
| --- | --- | --- |
| `useEffect` | la mount | la unmount |
| `useFocusEffect` | când ecranul ajunge deasupra | când e acoperit de altul |

```jsx
useFocusEffect(
  useCallback(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []),
);
```

Funcția **trebuie** învelită în `useCallback`. Altfel ar fi una nouă la fiecare render, iar
hook-ul ar opri și ar reporni intervalul de fiecare dată.

## Încercați

Deschideți "alt ecran", așteptați 5 secunde, reveniți. Cronometrul din `useEffect` a mers
în fundal, cel din `useFocusEffect` a stat pe loc.

Folosiți `useFocusEffect` pentru tot ce trebuie să ruleze doar cât ecranul e vizibil:
polling, camera, senzori, reîncărcarea datelor la revenire.
