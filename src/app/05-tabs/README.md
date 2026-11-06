# 05 · Tabs

**Ce arată:** un grup, bara de tab-uri desenată în JavaScript și un stack în interiorul unui tab.

```
05-tabs/
├── (tabs)/              grup: nu apare în adresă
│   ├── _layout.js       Tabs, bara de jos
│   ├── index.js         /05-tabs
│   ├── profil.js        /05-tabs/profil
│   └── produse/
│       ├── _layout.js   Stack, cu anchor
│       ├── index.js     /05-tabs/produse
│       └── [id].js      /05-tabs/produse/42
└── despre.js            /05-tabs/despre   (în stiva rădăcină, peste bară)
```

## Grupuri

Parantezele fac din `(tabs)` un **grup**: organizează fișierele și permite un `_layout`
propriu, dar nu apare în adresă. Comparați `usePathname()` cu `useSegments()` în jos pe ecran.

## Layout-uri imbricate

`Stack` (rădăcina) > `Tabs` (`(tabs)/_layout.js`) > `Stack` (`produse/_layout.js`).

- În rădăcină, `05-tabs/(tabs)` are `headerShown: false`, altfel ar apărea două header-e.
- În `Tabs`, tab-ul `produse` are `headerShown: false` din același motiv: stiva lui are header.
- `despre.js` stă **lângă** grup, nu în el. E în stiva rădăcină, deci acoperă și bara.

## Tab-urile nu sunt o stivă

Fiecare tab rămâne montat după prima vizită și își păstrează stiva. Deschideți un produs,
treceți pe Profil, reveniți: produsul e tot deschis.

## `anchor` și `withAnchor`

```js
export const unstable_settings = { anchor: 'index' };
```

Un deep link direct la `/05-tabs/produse/3` ar deschide detaliile fără nimic dedesubt.
`anchor` pune lista sub ele, ca Înapoi să ducă undeva. Pentru un `Link` din alt tab,
același efect îl dă `<Link withAnchor>` (vedeți tab-ul Acasă).
