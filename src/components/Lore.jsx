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

  return (
    <>
      <Cabecalho
        emojiTitulo={lore.emojiTitulo}
        titulo={lore.titulo}
        data={lore.data}
        id={lore.id}
      />
      {lore.capitulos.map((cap) => (
        <Capitulo key={cap.id ?? cap.titulo} {...cap} />
      ))}
    </>
  );
}
