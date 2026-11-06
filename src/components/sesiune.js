// Cine este logat. Un Context foarte simplu, doar cât să existe un "utilizator"
// pentru exemplul 09. Starea globală și autentificarea reală vin mai târziu în curs.
import { createContext, useContext, useState } from 'react';

const SesiuneContext = createContext(null);

export function SesiuneProvider({ children }) {
  const [utilizator, setUtilizator] = useState(null);

  const valoare = {
    utilizator,
    intra: (nume) => setUtilizator(nume),
    iesi: () => setUtilizator(null),
  };

  return <SesiuneContext.Provider value={valoare}>{children}</SesiuneContext.Provider>;
}

export function useSesiune() {
  return useContext(SesiuneContext);
}
