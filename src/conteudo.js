/**
 * Todo o conteúdo do site mora aqui.
 *
 * lores -> { "id-do-lore": { emojiTitulo, titulo, data, capitulos: [ ... ] } }
 * capitulo -> { emoji, titulo, blocos: [ ... ] }
 * bloco -> { tipo: "...", ...dados }   (a ordem do array é a ordem na tela)
 *
 * Tipos de bloco disponíveis (ver components/Bloco.jsx):
 *   { tipo: "citacao",  paragrafos: ["texto", "texto"] }   // ">" + "-#"
 *   { tipo: "texto",    texto: "texto normal" }
 *   { tipo: "imagem",   src: "/img/arquivo.png", legenda: "opcional" }
 *   { tipo: "lista",    itens: ["item", "item"] }
 *   { tipo: "divisor" }
 *
 * Dentro de qualquer texto: **negrito** e *itálico*.
 * Imagens ficam na pasta public/img/.
 */

export const lores = {
  "segunda-guerra": {
    emojiTitulo: "🐜",
    titulo: "A Segunda Guerra Mundial",
    data: "Período da Segunda Guerra Mundial",
    capitulos: [
      {
        emoji: "💀",
        titulo: "O sonho que virou pesadelo.",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Enquanto o mundo achava que estava tudo "em paz", a Europa estava começando as
               tensões do período do que passaria a ser conhecido como **SEGUNDA GUERRA MUNDIAL**.
               Mas muito diferente do que se esperava, essa guerra ultrapassou QUALQUER consideração
               de comum. Tudo começou com a criação do **CAPITÃO AMÉRICA**, a onde ele teve seu
               **TOM BAKER**, mas foi completamente diferente. Este era um garoto,um jovem que se
               auto propôs a ajudar o Capitão América e se entregou para tomar o soro do super
               soldado também. Entretanto, ao chegarem na Europa, eles se depararam com um desafio
               enorme, após libertarem pessoas presas num castelo na Holanda, em **Outubro de 1940**,
               eles se depararam com o **OVERMAN**, o homem mais forte e idealizado da Alemanha, e
               após serem deixados vivos por pura mercê do alemão, eles nao recuaram. Após uma outra
               invasão bem sucedida, Capitão América viu outro desafio: a Alemanha tinha seu próprio
               Capitão América, mas com outro nome, seu nome era Übermensch, mas ele era melhor que
               o Capitão em todos os quesitos.`,
            ],
          },
          {
            tipo: 'citacao',
            paragrafos: [
              `Após a "vitória", o Reino Unido junto de uma parceria do mesmo serviço secreto que
               havia feito o soro do Capitão América pediu o sangue dele para engenharia reversa
               para contribuir com a guerra, e então o mundo foi contemplado com não só um, mas dois
               supersoldados aliados, os Capitães América e Britânia, e o jovem Tom. A primeira
               missão deles foi um sucesso, mas a guerra estava muito longe de acabar.`
            ]
          }
        ],
      },
      {
        emoji: "🪄",
        titulo: "A virada do jogo.",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Em Nova Iorque, enquanto passava por uma conferência de arqueologia... **NATHAN MART** aparece na conferência sentado na mesma mesa de sua família, uma família tradicional da arqueologia dos **ESTADOS UNIDOS**. Mas quando ele foi num objeto do **EGITO ANTIGO**, entrou em transe e foi parar a onde tinha um artefato do Egito Antigo, Roma, na Itália. Lá algumas faixas de braço que consumiram a vida de quatro soldados para dentro de um general **italiano**. Após uma interação rápida com o general, Nathan Mart viu que ganhou um novo oponente, mas que era milenar para o espírito em seu elmo, **NABU**.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Já na base dos três super soldados, enquanto conversavam, uma voz começou a ecoar. Era Nathan Mart que decidiu se revelar para o pequeno grupo, e após convencer eles de que eles precisariam montar um grupo para combater a nova força que o **EIXO** estava preparando junto da **UNIÃO SOVIÉTICA**, eles se uniram e formaram... **A SOCIEDADE**. Entretanto, logo na primeira batalha do grupo, tudo foi sofrido, e eles estavam na vantagem numérica... Até que **OVERMAN APARECEU** e derrotou os três super soldados sem dificuldade alguma. Nathan teve que retirar o grupo as pressas de lá, os levando para um **hospital do MI6**, a onde eles ficariam até se recuperarem.`
            ]
          }
        ],
      },
      {
        emoji: "💪",
        titulo: "A força bruta chega",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Após a derrota, Nathan tem a ide ir atrás de dois seres muito mais fortes que qualquer supersoldado. Se tratavam de: **ARTHUR THOMPSON**, ou popularmente conhecido como: **ÁTOMO**. E **HYPOLITA**, a **MULHER-MARAVILHA**. No primeiro teste de Átomo, entretanto, ele teve uma luta totalmente desequilibrada com o Overman, notando que seu nemesis naquela guerra era muito mais do que só um adversário comum. Então, os grupos se formaram, a Sociedade contendo: Sr. Destino, Capitão América, Capitão Britânia, Tom Baker, Mulher-Maravilha e Átomo; e do lado inimigo: Blitzkrieg, Overman, Ubermensch/Capitão Hydra, Oráculo e Guardião Vermelho.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Então, A Sociedade se separou em duas missões. Nathan estava machucado e ficou na base, Átomo ficou com Nathan e o restante do grupo foi impedir a equipe do Eixo na **ÁFRICA**. Na missão de Átomo, ele se deparou com o **ORÁCULO**, em Saint-Dennis na França, fazendo movimentações estranhas com o **CUBO CÓSMICO**, numa espécie de dispositivo para um portal. Depois de uma batalha brutal contra o Oráculo, Átomo causou uma explosão de **matéria escura** colidindo seus poderes atômicos contra o feixe místico e imbuido da energia cósmica do cubo que Oráculo fizera, que afetou a região inteira como se fosse uma explosão de uma **bomba atômica**. Átomo foi arremessado longe caindo por sorte numa base rebelde ao Reich que ajudou ele, Nathan o ajudou.`
            ]
          },
          { tipo: "citacao",
            paragrafos: [
              `Depois de três dias, Nathan foi no hospital de vítimas, com um disfarce de um médico alemão. Ele começou a entrevistar alguns pacientes que desenvolveram **super poderes** por conta da matéria escura, mas por ter feito um disfarce com magia, o Oráculo o sentiu, e então chegou disparando uma onda de energia que destruiu **metade** do prédio, jogando Nathan na rua. Mas... Os pacientes do hospital se uniram e fizeram frente contra o Oráculo, e nisso, conseguiram tempo até Nathan se levantar, quando se levantou, ele fez contato com **DINAH VOSS**, que havia ganhado poderes de ondas sonoras com a voz, que começou a gritar na direção do Oráculo o imobilizando, Nathan apareceu atrás dele e executou um banimento de dimensão no antagonista.`
            ]
          }
        ]
      },
      {
        emoji: "🕵️",
        titulo: "O plano secreto nazista",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `O ocorrido de Saint-Dennis deixou todos os heróis preocupados. Por decisão unânime da **SOCIEDADE**, eles decidiram que era hora de dar um tempo, cada um assumiu sua trama secudária a guerra, mas ficaram todos reunidos no hospital do MI6 que já era "costumeiro" para eles, ajudando as pessoas na guerra comum. Entretanto, os três super soldados **TOM BAKER**, **CAPITÃO AMÉRICA** e **CAPITÃO BRITÂNIA** não podia descansar, não agora, seus países precisavam deles mais do que tudo. Então eles começaram a investigar juntos, os levanto até os Alpes Suíços. Lá, aconteceu tudo rápido, Tom Baker caiu do trem bala da HYDRA e teve que agir por conta, destruindo um acampamento e pedindo ajuda. Capitão América e Capitão Britânia seguiram em dupla pelo trem, caindo numa emboscada em Praga, na Tchecoeslováquia, mas após conseguirem vencer até o **CAPITÃO HYDRA**, eles seguiram até a Noruega, onde numa base da HYDRA eles pegaram arquivos que falavam do começo do plano da **SOLUÇÃO FINAL**.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Paralelo a tudo isso, Tom Baker "enganou" Átomo e Sr. Destino, fazendo eles ajudarem ele a descobrir um **Proto Campo de Concentração** numa região da Alemanha, eles ajudaram mas com um pé atrás, até que Tom foi até lá. Ao voltarem, Capitão América e Capitão Britânia ficaram enfurecidos e foram atrás do jovem Tom Baker, soltando todos os presos do campo de concentração e achando Tom, que estava totalmente **exposto** a experimentos da HYDRA e potencialmente fora da guerra por agora.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Depois do resgate de Tom, na mesma decisão unânime de antes, **A SOCIEDADE** decidiu que era hora de juntar esforços e combater de uma vez o Eixo nesta reta final, então foram atrás de uma das mulheres que haviam sido afetadas, chamando **DINAH VOSS** para integrar o grupo, agora atuando sob o alter ego de **CANÁRIO NEGRO**. Então, o time foi para campo... Mas eles acharam estranho, já que o Eixo lutando na **RÚSSIA**. A batalha estava sendo brutal para ambos os lados, até que dos céus, um escudo vermelho surgiu e golpeou os homens... o **GUARDIÃO VERMELHO** surgiu e ajudou os Aliados, já que a Alemanha covardemente quebrou o **Pacto Ribbentrop-Molotov** e começou a atacar a **UNIÃO SOVIÉTICA**. Ao fim da batalha, o Guardião Vermelho simplesmente desapareceu do campo, os aliados retornaram para suas bases.`
            ]
          }
        ]
      },
      {
        emoji: '📯',
        titulo: 'Reta Final',
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Os três últimos anos da guerra foram brutais. Cada luta dos Aliados contra o Eixo era sinônimo de realmente uma batalha, os vencedores saiam quase que no mesmo estado de derrota que os perdedores. Mas, para o lado dos superhumanos, uma ajuda foi bem-vinda. No meio de uma das diversas batalhas travadas entre a Sociedade e o grupo de superhumanos do Eixo, os nazistas e fascistas não contavam que eles iriam irritar alguém que não deveriam... **MARINUS**, o Imperador dos Sete Mares. Que surgiu com um poderoso tsunami no campo de batalha, Nathan aproveitou e explicou a situação para ele, e Marinus por conveniência ajudou os Aliados, já que estava farto da indústria alemã **destruindo o Oceano**.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Então, chegou a temida **batalha final**. Os soldados Aliados marchavam rumo a **BERLIM**. Os superhumanos do Eixo continham as tropas, até que **Sociedade** em seu poder máximo chegou, e a ordem era direta: **acabar com a guerra... custe o que custar**. E assim foi, cada batalha foi individual e com muito teor de propriedade. O **CAPITÃO HYDRA** foi vencido "facilmente" pelos quatro super soldados em campo, e após a luta, eles partiram para um acampamento secreto da HYDRA que descobriram de última hora. **ORÁCULO** foi vencido por **SENHOR DESTINO**, mas foi a batalha mais difícil da vida do mago, já que ele escapou por um fio, ficando de repouso após a luta definitiva. E nos céus, ao lado dos aviões, **ÁTOMO** e **MULHER-MARAVILHA** travavam a batalha contra o **OVERMAN**, que estava se soltando cada vez mais e se tornando perigoso para os dois.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `No laboratório secreto da HYDRA que Capitão América, Tom e Capitão Britânia acharam, eles descobriram a **verdade do Overman**, a onde ele era um **bebê alienígena** que chegou ali por acaso após experimentos da HYDRA com o **CUBO CÓSMICO**. O plano do **ORÁCULO** em Saint-Dennis era tentar chamar outro do planeta do Overman para a HYDRA e o Eixo poderem fazer sua manipulação igual e ter dois **superhomens** em campo. E no meio dos papéis, eles descobriram a fraqueza dele: **kryptonita**. Na tentativa de se comunicar por rádio, Nathan ouviu e transmitiu a mensagem para Átomo, que pediu para Hypolita "seguras as pontas". Ele voou até o laboratório e tentou rapidamente absorver as propriedades da kryptonita, então partiu para combate novamente, dessa vez conseguindo rivalizar sozinho com o Overman. Mas ao chegar lá, ele viu simplesmente Overman **massacrando** a Mulher-Maravilha; Átomo ganhou mais um propósito na luta: vingar todos os que o Overman fez sofrer, principalmente sua amiga Hypolita.`
            ]
          },
          { tipo: "citacao",
            paragrafos: [
              `A batalha final entre **ÁTOMO** e **OVERMAN** foi digna do espetáculo que foi o céu naquele dia. Todos os soldados pararam a guerra para ver a luta dos dois, a onde cada soco ecoava no céu e espalhava as nuvens. Depois de uma luta brutal, Átomo com seu traje rasgado e com poucas energias, concentrou toda sua força em um soco, e com a última gota de esperança, socou o rosto do Overman, o arremessando contra o chão, Átomo caiu em cima dele e continuou socando ele, até que ouviu com sua super-audição que o coração do Overman já não batia mais... **A Sociedade venceu**.`
            ]
          }
        ]
      }
    ],
  },
};
