import { lores } from "../conteudo";
import Cabecalho from "./Cabecalho";
import Capitulo from "./Capitulo";

/** <Lore id="segunda-guerra" />  ->  cabeçalho grande + todos os capítulos. */
export default function Lore({ id }) {
  const lore = lores[id];

  if (!lore) {
    console.warn(`Lore: "${id}" não existe em conteudo.js`);
    return null;
  }

  // temporada = posição do lore em conteudo.js (0, 1, 2...), ou o número que você
  // escrever em `temporada: N` dentro do próprio lore
  const numero = lore.temporada ?? Object.keys(lores).indexOf(id);

  return (
    <>
      <Cabecalho
        emojiTitulo={lore.emojiTitulo}
        titulo={lore.titulo}
        temporada={numero}
        data={lore.data}
        id={lore.id}
      />
      {lore.capitulos.map((cap) => (
        <Capitulo key={cap.id ?? cap.titulo} {...cap} />
      ))}
    </>
  );
}