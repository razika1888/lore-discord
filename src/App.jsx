import { useRef, useEffect } from "react";
import Aside from "./components/Aside";
import Lore from "./components/Lore";

import Lenis from "lenis"
import "lenis/dist/lenis.css"

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.08, wheelMultiplier: 1, });
    return () => { lenis.destroy(); };
  }, []);
  const conteudoRef = useRef(null);

  return (
    <div className="app">
      <Aside
        titulo="Lore Universo Ultimate"
        subtitulo="Índice de capítulos"
        logo="📖"
        conteudoRef={conteudoRef}
      />

      <main className="conteudo" ref={conteudoRef}>
        <div className="conteudo__coluna">
          <Lore id="segunda-guerra" />
        </div>
      </main>
    </div>
  );
}
