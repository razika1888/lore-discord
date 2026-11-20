import { criarId } from "../utils/criarId";
import "./Cabecalho.css";

/** Cartão de título da temporada. Props: emojiTitulo, titulo, data, temporada, id */
export default function Cabecalho({ emojiTitulo, titulo, data, temporada, id }) {
  return (
    <header
      className="cabecalho"
      id={id ?? criarId(titulo)}
      data-nav="secao"
      data-titulo={temporada != null ? `S${temporada} | ${titulo}` : titulo}
      data-emoji={emojiTitulo}
    >
      <div className="cabecalho__cartao">
        <p className="cabecalho__rotulo">Lore{temporada != null && ` · S${temporada}`}</p>
        <h1 className="cabecalho__titulo">{titulo}</h1>
        {data && (
          <p className="cabecalho__data">
            <span className="estrela" aria-hidden="true" />
            {data}
          </p>
        )}
        <span className="cabecalho__emblema" aria-hidden="true">{emojiTitulo}</span>
      </div>
    </header>
  );
}
