import { criarId } from "../utils/criarId";
import "./Cabecalho.css";

/**
 * Cabeçalho grande (equivale ao "#" do Discord).
 * Props: emojiTitulo, titulo, data  (id é opcional)
 */
export default function Cabecalho({ emojiTitulo, titulo, data, id }) {
  return (
    <header
      className="cabecalho"
      id={id ?? criarId(titulo)}
      data-nav="secao"
      data-titulo={titulo}
      data-emoji={emojiTitulo}
    >
      <h1 className="cabecalho__titulo">
        <span className="cabecalho__marcador">
          ⌈<code>{emojiTitulo}</code>」
        </span>
        <span className="cabecalho__sublinhado">L</span>ore
        <span className="cabecalho__separador">﹕</span>
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
