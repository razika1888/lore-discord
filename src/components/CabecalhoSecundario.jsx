import { criarId } from "../utils/criarId";
import "./CabecalhoSecundario.css";

/**
 * Título de capítulo. Props: emoji, titulo, id, aberto, aoAlternar
 * Com `aoAlternar`, o título vira um botão que abre/fecha o capítulo.
 */
export default function CabecalhoSecundario({ emoji, titulo, id, aberto, aoAlternar }) {
  const conteudo = (
    <>
      <span className="capitulo__selo" aria-hidden="true">{emoji}</span>
      <span className="capitulo__titulo">{titulo}</span>
      {aoAlternar && (
        <svg className="capitulo__seta" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );

  return (
    <h2 className="capitulo" id={id ?? criarId(titulo)} data-nav="capitulo" data-titulo={titulo} data-emoji={emoji}>
      {aoAlternar ? (
        <button type="button" className="capitulo__botao" aria-expanded={aberto} onClick={aoAlternar}>
          {conteudo}
        </button>
      ) : (
        conteudo
      )}
    </h2>
  );
}
