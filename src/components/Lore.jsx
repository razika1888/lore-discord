import { lores } from "../conteudo";
import { criarId } from "../utils/criarId";
import Cabecalho from "./Cabecalho";
import Capitulo from "./Capitulo";
import Subtrama from "./Subtrama";

/** <Lore id="segunda-guerra" />  ->  cabeçalho + capítulos + subtramas (com a cor da temporada). */
export default function Lore({ id }) {
  const lore = lores[id];

  if (!lore) {
    console.warn(`Lore: "${id}" não existe em conteudo.js`);
    return null;
  }

  // temporada = posição do lore em conteudo.js, ou o `temporada: N` escrito no lore
  const numero = lore.temporada ?? Object.keys(lores).indexOf(id);

  return (
    <section className="lore" data-tema={Math.abs(Number(numero) || 0) % 3}>
      <Cabecalho
        emojiTitulo={lore.emojiTitulo}
        titulo={lore.titulo}
        temporada={numero}
        data={lore.data}
        id={lore.id}
      />

      {lore.capitulos?.map((cap) => (
        <Capitulo
          key={cap.id ?? cap.titulo}
          {...cap}
          id={cap.id ?? criarId(`${id} ${cap.titulo}`)}
        />
      ))}

      {lore.subtramas?.map((sub, i) => (
        <Subtrama
          key={sub.id ?? sub.titulo}
          {...sub}
          numero={sub.numero ?? `${numero}.${i + 1}`}
        />
      ))}
    </section>
  );
}
