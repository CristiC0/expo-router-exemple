// Datele exemplelor. Nu sunt în src/app, deci NU devin rute.
export const produse = [
  { id: '1', nume: 'Cafea', pret: 18, descriere: 'Boabe prăjite mediu, din Etiopia.' },
  { id: '2', nume: 'Ceai verde', pret: 12, descriere: 'Frunze întregi, din Japonia.' },
  { id: '3', nume: 'Ciocolată', pret: 9, descriere: '70% cacao, fără lapte.' },
  { id: '4', nume: 'Biscuiți', pret: 7, descriere: 'Cu ovăz și miere.' },
];

// Parametrii din adresă sunt mereu string-uri, de aceea comparăm cu un id string.
export function gasesteProdus(id) {
  return produse.find((p) => p.id === id);
}
