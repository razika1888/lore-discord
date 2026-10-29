import { useEffect, useRef, useState } from "react";
import "./Aside.css";

import logoFormiga from '../../public/formiga.svg' 

/**
 * Lê a página e monta a árvore sozinho:
 *   Cabecalho (data-nav="secao")  ->  CabecalhoSecundario (data-nav="capitulo")
 */
function lerEstrutura(raiz) {
  const arvore = [];
  raiz.querySelectorAll("[data-nav]").forEach((el) => {
    const item = { id: el.id, titulo: el.dataset.titulo, emoji: el.dataset.emoji };
    if (el.dataset.nav === "secao") arvore.push({ ...item, capitulos: [] });
    else if (arvore.length) arvore[arvore.length - 1].capitulos.push(item);
  });
  return arvore;
}

function irPara(id) {
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
}

export default function Aside({
  titulo = "LORE",
  subtitulo = "Índice de capítulos",
  logo = "📖",
  conteudoRef,
}) {
  const [arvore, setArvore] = useState([]);
  const [fechadas, setFechadas] = useState({});
  const [ativo, setAtivo] = useState(null);

  // enquanto o clique estiver rolando a página, a rolagem não troca o item ativo
  const travadoAte = useRef(0);

  useEffect(() => {
    const raiz = conteudoRef.current;
    if (!raiz) return;

    setArvore(lerEstrutura(raiz));

    const titulos = [...raiz.querySelectorAll("[data-nav]")]; // na ordem da página
    let quadro = null;

    const atualizar = () => {
      quadro = null;
      const linha = window.innerHeight * 0.3; // "linha de leitura" a 30% do topo
      const rolavel = document.documentElement.scrollHeight > window.innerHeight + 4;
      const noFim =
        rolavel &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;

      // ativo = o último título que já passou da linha de leitura
      let atual = titulos[0];
      for (const el of titulos) {
        if (el.getBoundingClientRect().top <= linha) atual = el;
        else break;
      }
      // no fim da página, os últimos títulos nunca chegam na linha: marca o último
      if (noFim) atual = titulos[titulos.length - 1];

      setAtivo(atual?.id ?? null);
    };

    const aoRolar = () => {
      if (Date.now() < travadoAte.current) {
        travadoAte.current = Date.now() + 150; // segue travado até a rolagem parar
        return;
      }
      if (!quadro) quadro = requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [conteudoRef]);

  const alternar = (id) => setFechadas((f) => ({ ...f, [id]: !f[id] }));

  // clicar num capítulo sempre o destaca, mesmo que a página não consiga rolar até o topo dele
  const selecionar = (id) => {
    travadoAte.current = Date.now() + 150;
    setAtivo(id);
    irPara(id);
  };
  const totalCapitulos = arvore.reduce((n, s) => n + s.capitulos.length, 0);

  return (
    <aside className="sidebar">
      <div className="sidebar-cabecalho">
        <div className="sidebar-logo" aria-hidden="true">
          <img src={logoFormiga}></img>
        </div>
        <div>
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
      </div>

      <div className="sidebar-divisor" />
      <p className="sidebar-legenda">LORES</p>

      <nav className="sidebar-navegacao" aria-label="Navegação do lore">
        {arvore.map((sec) => {
          const aberta = !fechadas[sec.id];
          const contemAtivo =
            ativo === sec.id || sec.capitulos.some((c) => c.id === ativo);

          return (
            <div key={sec.id} className="sidebar-grupo">
              <button
                className={`sidebar-historia ${contemAtivo ? "ativa" : ""}`}
                aria-expanded={aberta}
                title={sec.titulo}
                onClick={() => alternar(sec.id)}
              >
                <span className="sidebar-toggle" aria-hidden="true">
                  <span className={`sidebar-seta ${aberta ? "aberta" : ""}`}>›</span>
                </span>
                <span className="sidebar-titulo-historia">
                  <span className="sidebar-capitulo-emoji">{sec.emoji}</span>
                  <span className="sidebar-nome">{sec.titulo}</span>
                </span>
              </button>

              {aberta && (
                <div className="sidebar-capitulos">
                  {sec.capitulos.map((cap) => (
                    <button
                      key={cap.id}
                      className="sidebar-capitulo"
                      title={cap.titulo}
                      aria-current={ativo === cap.id ? "location" : undefined}
                      onClick={() => selecionar(cap.id)}
                    >
                      <span className="sidebar-capitulo-linha" aria-hidden="true" />
                      <span className="sidebar-capitulo-emoji">{cap.emoji}</span>
                      <span className="sidebar-nome">{cap.titulo}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-rodape">
        <span className="sidebar-status" aria-hidden="true" />
        {arvore.length} lores · {totalCapitulos} capítulos
      </div>
    </aside>
  );
}