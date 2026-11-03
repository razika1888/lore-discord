import { criarId } from "../utils/criarId";
import "./Cabecalho.css";

/**
 * Cabeçalho grande (equivale ao "#" do Discord).
 * Props: emojiTitulo, titulo, data  (temporada e id são opcionais)
 */
export default function Cabecalho({ emojiTitulo, titulo, data, temporada, id }) {
  return (
    <header
      className="cabecalho"
      id={id ?? criarId(titulo)}
      data-nav="secao"
      data-titulo={temporada != null ? `S${temporada} | ${titulo}` : titulo}
      data-emoji={emojiTitulo}
    >
      <h1 className="cabecalho__titulo">
        <span className="cabecalho__marcador">
          ⌈<code>{emojiTitulo}</code>」
        </span>
        <span className="cabecalho__sublinhado">L</span>ore
        <span className="cabecalho__separador">﹕</span>
        {temporada != null && (
          <>
            <span className="cabecalho__temporada">S{temporada}</span>
            <span className="cabecalho__barra" aria-hidden="true" />
          </>
        )}
        <span className="cabecalho__sublinhado">{titulo}</span>
      </h1>

      {data && (
        <p className="cabecalho__data">
          〚<code>🗓️</code>〛》<strong>{data}</strong>
        </p>
      )}
    </header>
  );
}