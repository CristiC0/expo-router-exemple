// /01-stiva/vechi
// Un ecran care nu are nimic de afișat: trimite mai departe.
// Redirect funcționează ca un replace: /vechi nu rămâne în istorie,
// deci Înapoi din Ecranul 1 NU revine aici.
import { Redirect } from 'expo-router';

export default function AdresaVeche() {
  return <Redirect href="/01-stiva/ecran/1" />;
}
