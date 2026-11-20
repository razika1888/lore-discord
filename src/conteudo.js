/**
 * Todo o conteúdo do site mora aqui.
 *
 * lores     -> { "id-do-lore": { emojiTitulo, titulo, data, temporada?, capitulos: [...], subtramas?: [...] } }
 * subtrama  -> { emoji?, titulo, data?, numero?, id?, capitulos: [...] }
 * capitulo  -> { emoji, titulo, id?, blocos: [...] }
 * bloco     -> { tipo: "...", ...dados }   (a ordem do array é a ordem na tela)
 *
 * NUMERAÇÃO (automática, pela ordem em que os lores aparecem neste arquivo):
 *   lores:     S0, S1, S2...      (para forçar: `temporada: 5` dentro do lore)
 *   subtramas: S1.1, S1.2, S2.1... (para forçar: `numero: "1.5"` dentro da subtrama)
 *
 * Na página, as subtramas vêm DEPOIS dos capítulos da temporada.
 * No menu lateral, cada subtrama é uma linha que abre e fecha com os capítulos dela.
 *
 * Tipos de bloco disponíveis (ver components/Bloco.jsx):
 *   { tipo: "citacao",  paragrafos: ["texto", "texto"] }   // ">" + "-#"
 *   { tipo: "texto",    texto: "texto normal" }
 *   { tipo: "imagem",   src: "/img/arquivo.png", legenda: "opcional" }
 *   { tipo: "lista",    itens: ["item", "item"] }
 *   { tipo: "divisor" }
 *
 * Dentro de qualquer texto: **negrito**, *itálico* e :emoji: (ver src/emojis.js).
 * Imagens ficam na pasta public/img/.
 * Se dois capítulos tiverem o mesmo título, passe um `id` manual em um deles.
 */

export const lores = {
  "segunda-guerra": {
    emojiTitulo: "🐜",
    titulo: "A Segunda Guerra Mundial",
    data: "1938-1945",
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
            tipo: "citacao",
            paragrafos: [
              `Após a "vitória", o Reino Unido junto de uma parceria do mesmo serviço secreto que
               havia feito o soro do Capitão América pediu o sangue dele para engenharia reversa
               para contribuir com a guerra, e então o mundo foi contemplado com não só um, mas dois
               supersoldados aliados, os Capitães América e Britânia, e o jovem Tom. A primeira
               missão deles foi um sucesso, mas a guerra estava muito longe de acabar.`,
            ],
          },
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
              `Já na base dos três super soldados, enquanto conversavam, uma voz começou a ecoar. Era Nathan Mart que decidiu se revelar para o pequeno grupo, e após convencer eles de que eles precisariam montar um grupo para combater a nova força que o **EIXO** estava preparando junto da **UNIÃO SOVIÉTICA**, eles se uniram e formaram... **A SOCIEDADE**. Entretanto, logo na primeira batalha do grupo, tudo foi sofrido, e eles estavam na vantagem numérica... Até que **OVERMAN APARECEU** e derrotou os três super soldados sem dificuldade alguma. Nathan teve que retirar o grupo as pressas de lá, os levando para um **hospital do MI6**, a onde eles ficariam até se recuperarem.`,
            ],
          },
        ],
      },
      {
        emoji: "💪",
        titulo: "A força bruta chega",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Após a derrota, Nathan tem a ideia de ir atrás de dois seres muito mais fortes que qualquer supersoldado. Se tratavam de: **ARTHUR THOMPSON**, ou popularmente conhecido como: **ÁTOMO**. E **HYPOLITA**, a **MULHER-MARAVILHA**. No primeiro teste de Átomo, entretanto, ele teve uma luta totalmente desequilibrada com o Overman, notando que seu nemesis naquela guerra era muito mais do que só um adversário comum. Então, os grupos se formaram, a Sociedade contendo: Sr. Destino, Capitão América, Capitão Britânia, Tom Baker, Mulher-Maravilha e Átomo; e do lado inimigo: Blitzkrieg, Overman, Ubermensch/Capitão Hydra, Oráculo e Guardião Vermelho.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Então, A Sociedade se separou em duas missões. Nathan estava machucado e ficou na base, Átomo ficou com Nathan e o restante do grupo foi impedir a equipe do Eixo na **ÁFRICA**. Na missão de Átomo, ele se deparou com o **ORÁCULO**, em Saint-Dennis na França, fazendo movimentações estranhas com o **CUBO CÓSMICO**, numa espécie de dispositivo para um portal. Depois de uma batalha brutal contra o Oráculo, Átomo causou uma explosão de **matéria escura** colidindo seus poderes atômicos contra o feixe místico e imbuido da energia cósmica do cubo que Oráculo fizera, que afetou a região inteira como se fosse uma explosão de uma **bomba atômica**. Átomo foi arremessado longe caindo por sorte numa base rebelde ao Reich que ajudou ele, Nathan o ajudou.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Depois de três dias, Nathan foi no hospital de vítimas, com um disfarce de um médico alemão. Ele começou a entrevistar alguns pacientes que desenvolveram **super poderes** por conta da matéria escura, mas por ter feito um disfarce com magia, o Oráculo o sentiu, e então chegou disparando uma onda de energia que destruiu **metade** do prédio, jogando Nathan na rua. Mas... Os pacientes do hospital se uniram e fizeram frente contra o Oráculo, e nisso, conseguiram tempo até Nathan se levantar, quando se levantou, ele fez contato com **DINAH VOSS**, que havia ganhado poderes de ondas sonoras com a voz, que começou a gritar na direção do Oráculo o imobilizando, Nathan apareceu atrás dele e executou um banimento de dimensão no antagonista.`,
            ],
          },
        ],
      },
      {
        emoji: "🕵️",
        titulo: "O plano secreto nazista",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `O ocorrido de Saint-Dennis deixou todos os heróis preocupados. Por decisão unânime da **SOCIEDADE**, eles decidiram que era hora de dar um tempo, cada um assumiu sua trama secundária a guerra, mas ficaram todos reunidos no hospital do MI6 que já era "costumeiro" para eles, ajudando as pessoas na guerra comum. Entretanto, os três super soldados **TOM BAKER**, **CAPITÃO AMÉRICA** e **CAPITÃO BRITÂNIA** não podia descansar, não agora, seus países precisavam deles mais do que tudo. Então eles começaram a investigar juntos, os levanto até os Alpes Suíços. Lá, aconteceu tudo rápido, Tom Baker caiu do trem bala da HYDRA e teve que agir por conta, destruindo um acampamento e pedindo ajuda. Capitão América e Capitão Britânia seguiram em dupla pelo trem, caindo numa emboscada em Praga, na Tchecoeslováquia, mas após conseguirem vencer até o **CAPITÃO HYDRA**, eles seguiram até a Noruega, onde numa base da HYDRA eles pegaram arquivos que falavam do começo do plano da **SOLUÇÃO FINAL**.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Paralelo a tudo isso, Tom Baker "enganou" Átomo e Sr. Destino, fazendo eles ajudarem ele a descobrir um **Proto Campo de Concentração** numa região da Alemanha, eles ajudaram mas com um pé atrás, até que Tom foi até lá. Ao voltarem, Capitão América e Capitão Britânia ficaram enfurecidos e foram atrás do jovem Tom Baker, soltando todos os presos do campo de concentração e achando Tom, que estava totalmente **exposto** a experimentos da HYDRA e potencialmente fora da guerra por agora.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Depois do resgate de Tom, na mesma decisão unânime de antes, **A SOCIEDADE** decidiu que era hora de juntar esforços e combater de uma vez o Eixo nesta reta final, então foram atrás de uma das mulheres que haviam sido afetadas, chamando **DINAH VOSS** para integrar o grupo, agora atuando sob o alter ego de **CANÁRIO NEGRO**. Então, o time foi para campo... Mas eles acharam estranho, já que o Eixo lutando na **RÚSSIA**. A batalha estava sendo brutal para ambos os lados, até que dos céus, um escudo vermelho surgiu e golpeou os homens... o **GUARDIÃO VERMELHO** surgiu e ajudou os Aliados, já que a Alemanha covardemente quebrou o **Pacto Ribbentrop-Molotov** e começou a atacar a **UNIÃO SOVIÉTICA**. Ao fim da batalha, o Guardião Vermelho simplesmente desapareceu do campo, os aliados retornaram para suas bases.`,
            ],
          },
        ],
      },
      {
        emoji: "📯",
        titulo: "Reta Final",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Os três últimos anos da guerra foram brutais. Cada luta dos Aliados contra o Eixo era sinônimo de realmente uma batalha, os vencedores saiam quase que no mesmo estado de derrota que os perdedores. Mas, para o lado dos superhumanos, uma ajuda foi bem-vinda. No meio de uma das diversas batalhas travadas entre a Sociedade e o grupo de superhumanos do Eixo, os nazistas e fascistas não contavam que eles iriam irritar alguém que não deveriam... **MARINUS**, o Imperador dos Sete Mares. Que surgiu com um poderoso tsunami no campo de batalha, Nathan aproveitou e explicou a situação para ele, e Marinus por conveniência ajudou os Aliados, já que estava farto da indústria alemã **destruindo o Oceano**.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Então, chegou a temida **batalha final**. Os soldados Aliados marchavam rumo a **BERLIM**. Os superhumanos do Eixo continham as tropas, até que **Sociedade** em seu poder máximo chegou, e a ordem era direta: **acabar com a guerra... custe o que custar**. E assim foi, cada batalha foi individual e com muito teor de propriedade. O **CAPITÃO HYDRA** foi vencido "facilmente" pelos quatro super soldados em campo, e após a luta, eles partiram para um acampamento secreto da HYDRA que descobriram de última hora. **ORÁCULO** foi vencido por **SENHOR DESTINO**, mas foi a batalha mais difícil da vida do mago, já que ele escapou por um fio, ficando de repouso após a luta definitiva. E nos céus, ao lado dos aviões, **ÁTOMO** e **MULHER-MARAVILHA** travavam a batalha contra o **OVERMAN**, que estava se soltando cada vez mais e se tornando perigoso para os dois.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `No laboratório secreto da HYDRA que Capitão América, Tom e Capitão Britânia acharam, eles descobriram a **verdade do Overman**, a onde ele era um **bebê alienígena** que chegou ali por acaso após experimentos da HYDRA com o **CUBO CÓSMICO**. O plano do **ORÁCULO** em Saint-Dennis era tentar chamar outro do planeta do Overman para a HYDRA e o Eixo poderem fazer sua manipulação igual e ter dois **superhomens** em campo. E no meio dos papéis, eles descobriram a fraqueza dele: **kryptonita**. Na tentativa de se comunicar por rádio, Nathan ouviu e transmitiu a mensagem para Átomo, que pediu para Hypolita "seguras as pontas". Ele voou até o laboratório e tentou rapidamente absorver as propriedades da kryptonita, então partiu para combate novamente, dessa vez conseguindo rivalizar sozinho com o Overman. Mas ao chegar lá, ele viu simplesmente Overman **massacrando** a Mulher-Maravilha; Átomo ganhou mais um propósito na luta: vingar todos os que o Overman fez sofrer, principalmente sua amiga Hypolita.`,
            ],
          },
          {
            tipo: "citacao",
            paragrafos: [
              `A batalha final entre **ÁTOMO** e **OVERMAN** foi digna do espetáculo que foi o céu naquele dia. Todos os soldados pararam a guerra para ver a luta dos dois, a onde cada soco ecoava no céu e espalhava as nuvens. Depois de uma luta brutal, Átomo com seu traje rasgado e com poucas energias, concentrou toda sua força em um soco, e com a última gota de esperança, socou o rosto do Overman, o arremessando contra o chão, Átomo caiu em cima dele e continuou socando ele, até que ouviu com sua super-audição que o coração do Overman já não batia mais... **A Sociedade venceu**.`,
            ],
          },
          {
            tipo: "imagem",
            src: "/img/sociedade-banner.png",
          },
        ],
      },
    ],

    // ---- subtramas desta temporada (aparecem como S0.1, S0.2... depois dos capítulos) ----
    // Descomente e preencha. Cada subtrama tem o mesmo formato de um lore, só sem emojiTitulo.
    subtramas: [],
  },

  "primeira-season": {
    emojiTitulo: "🐜",
    titulo: "A Fundação Lázaro",
    data: "03/03/2025",
    capitulos: [
      {
        emoji: "📖",
        titulo: "𝐏𝐘𝐌capitulação",
        recolhivel: true,
        blocos: [
          {
            tipo: "texto",
            texto: "# A ERA DE OURO",
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Estamos na... Era **Moderna**. A **Era de Ouro** passou por completo, junto da **Era de Prata** e a **Era de Bronze**. Mas, precisamos nos antenar nas notícias. Depois do final da **Segunda Guerra Mundial**, a Sociedade continuou. O grupo estava completo... Exceto por **STEVE ROGERS**, o **CAPITÃO AMÉRICA** que estava congelado e **TOM BAKER** que havia desaparecido após uma explosão de um míssel **no Ártico**. Mas o restante do grupo seguiu. **HYPOLITA** retornou para **THEMYSCIRA** depois da guerra junto de **CONNOR**, seu marido. **NATHAN MART** se casou com **DINAH VOSS**, atuando ao lado dela nas regiões de **MANHATTAN**. **ARTHUR THOMPSON** retornou para **IVY TOWN** e continuou sua atuação como Átomo, se casando alguns anos depois. E mais alguns membros chegaram, o ferreiro **MICHAEL SCOTT**, conhecido como **LANTERNA VERDE**, que atuava em **GOTHAM CITY**, o professor **PETER J. HOLT**, conhecido como **JETSTRIDE**, que atuava em **KEYSTONE CITY** e outros como **STARMAN**, **GAVIÃO NEGRO** e **MULHER GAVIÃO**.`,
            ],
          },
          {
            tipo: "imagem",
            src: "https://i.ytimg.com/vi/DoP4oR1LRw8/maxresdefault.jpg",
          },
          {
            tipo: "texto",
            texto: "# A ERA DE PRATA",
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Depois da **Era de Ouro**, temos a **Era de Prata**, que contou com a continuação do legado desses heróis que foram lendários. Para constar, os heróis da Era de Ouro lutaram contra ameaças de nível **galáxia**, sendo reconhecidos mundialmente por seus esforços. Mas para a Era de Prata tivemos a **Ascensão Mutante** na Terra, a chegada dos **Inumanos**, e a constituição da segunda geração da **Sociedade da Justiça**, que continha membros originais e outros como **STARGIRL**, **MOONGIRL**, **IRRADION** e até mesmo heróis solo como **HYPERION** e **MARVEL AZUL** (que nunca se deram muito bem...).`,
            ],
          },
          {
            tipo: "imagem",
            src: "https://farofeiros.com.br/wp-content/uploads/2018/11/Esquadr%C3%A3o-Supremo-da-Am%C3%A9rica-Vingadores-Avengers-10-Blog-Farofeiros-04.jpg",
          },
          {
            tipo: "texto",
            texto: "# A ERA DE BRONZE",
          },
          {
            tipo: "citacao",
            paragrafos: [
              `E por fim, a geração mais próxima de nós, a **ERA DE BRONZE**. Nesta era pouco se é glamurizado pois o mundo estava num estado de "paz" depois de muitos conflitos nas eras antigas. Nesta geração, os nomes mais notáveis são: **ESMAGA ÁTOMO**, **ÁTOMO ⅠⅠ**, **HOMEM-BORRACHA**, **MOTOQUEIRO FANTASMA**, **CAPITÃO BRITÂNIA** e **SENHOR FANTÁSTICO**. Os maiores feitos dessa geração foram continuar o estado de paz da Terra, entretanto a maior ameaça que enfrentaram juntos foi a corrupção do **LANTERNA VERDE** Dylan O'Riley que se tornou o **PARALLAX** e causou perturbações por completo na Terra.`,
            ],
          },
          {
            tipo: "imagem",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTR9nePHE9XxW9eDflxUAuIdx_3Xhfq9CJMk4--eYTn6NVXkdxqq8mdoJ&s=10",
          },
        ],
      },
      {
        emoji: "💵",
        titulo: "Lore Season 1",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [
              `Depois do acontecimento do **PARALLAX**, o mundo ficou com receio dos heróis. A maioria abandonou seus alter egos para viver secretamente, entretanto, por possuirem auxílio do governo, aqueles que faziam parte de grupos como: **A SOCIEDADE DA JUSTIÇA**, **INVASORES**, **LUTADORES DA LIBERDADE**, **OS GUERREIROS** e outros grupos de super-heróis, puderam continuar atuando livremente salvando as pessoas. Entretanto, nos **ESTADOS UNIDOS**, começou a surgir uma corporação liderada por um homem que **GOTHAM-CITY** conhecia... **A FUNDAÇÃO LÁZARO**, comandanda pelo CEO **R'AS AL'GHUL**.`
            ]
          },
          {
            tipo: "citacao",
            paragrafos: [
              `Pouco a pouco, a civilização foi sendo tomada pelo corporativismo da Fundação Lázaro. As pessoas começaram a se dividir entre os que ainda acreditavam nos heróis e os que acreditavam no fim dos heróis. E nesse meio tempo, no **KANSAS**, na pequena cidade de **SMALLVILLE**... Uma nave caí, e um jovem adolescente é abrigado pelos seus pais. Ao chegar do espaço para uma família que **não podia ter filhos**, a esperança começou a renascer para a família.`
            ]
          },
        ]
      },
    ],
 
    // ---- subtramas desta temporada (aparecem como S1.1, S1.2... depois dos capítulos) ----
    // Mesmo formato do exemplo comentado na "segunda-guerra" acima.
    subtramas: [
      {
        emoji: "👊",
        titulo: "Guerra Total",
        data: "23/07/2025",
        capitulos: [
          {
            emoji: "📖",
            titulo: "𝐏𝐘𝐌capitulação",
            recolhivel: true,
            blocos: [
              {
                tipo: "citacao",
                paragrafos: [`Então, depois de muita confusão arrumada de todos os lados, finalmente a união principal veio: **ULTIMATOS**. O grupo composto por **SUPREMOS**: **CAPITÃO AMÉRICA**, o Super Soldado da **SEGUNDA GUERRA MUNDIAL**, descongelado por acaso do **AQUECIMENTO GLOBAL** e resgatado pela equipe; **TOM BAKER**, o antigo e já sentenciado **SOLDADO INVERNAL**, mas atuando como **ÀS AMERICANO**; **HOMEM DE FERRO**, o gênio bilionário Matthew Stark; **THOR**, o deus do trovão; **HULK**, o gigante do carbono; Hank Pym, em seu alter ego que utiliza suas partículas, **HOMEM FORMIGA**; **SUPERMAN**, o homem que veio de outro planeta; **BATMAN**, o desconhecido vigilante de **GOTHAM CITY**; **MULHER MARAVILHA** a semi-deusa criada no **INFERNO**; **SENHOR DESTINO**, o mago mais poderoso do planeta e herdeiro do primeiro Senhor Destino da Segunda Guerra Mundial e por fim **FLASH**, o velocista escarlate. Juntos, eles derrotaram ambos os magnatas depois de uma luta que custou muito para toda a equipe.`]
              },
              {
                tipo: "imagem",
                src: "/img/jornal-ultimatos.png"
              },
            ]
          },
          {
            emoji: "❗",
            titulo: "A Guerra Total",
            blocos: [
              {
                tipo: "citacao",
                paragrafos: [`Mas, apesar do esforço coletivo, as mentes brilhantes de **MATTHEW STARK** e de **BRUCE WAYNE** não se deixavam enganar facilmente, e com receios do que os **SUPERHUMANOS** poderiam fazer, eles começaram a travar pequenas batalhas. O marco inicial foi após pressão das corporações, incluindo **WAYNE TECH** e **M. STARK TECHNOLOGIES**, o então **PRESIDENTE DOS ESTADOS UNIDOS**, Benjamin Eley, anunciou a instucionalização dos heróis, no registro conhecido como **ATO DE REGISTRO DOS SUPERHUMANOS**, ou conhecido por ARS.`]
              },
              { tipo: "texto", texto: "# A GUERRA CIVIL" },
              {
                tipo: "citacao",
                paragrafos: [`Um dos embates mais ferrenhos foi entre **HOMEM DE FERRO** contra **CAPITÃO AMÉRICA** e **ÁS AMERICANO**, onde de lados opostos, eles espalhavam suas ideologias. De um lado, um time formou sua liderança com: **MATTHEW STARK**, **REED RICHARDS**, **HANK PYM** e **LEX LUTHOR**, os quatro homens mais inteligentes vivos reunidos de um lado em prol da humanidade e do progresso. Enquanto do outro lado, se formou por lideranças: **STEVE ROGERS**, **TOM BAKER**, **HOMEM-ARANHA**, **SENHOR INCRÍVEL** e **MARK GRAYSON**. Respectivamente os nomes das equipes eram: **ÁULICOS** e **INSURGENTES**.`]
              },
              { tipo: "texto", texto: "# BATMAN VS. SUPERMAN" },
              {
                tipo: "citacao",
                paragrafos: [`Do outro lado, **BATMAN** tinha um objetivo maior em mente. Ele não queria apenas um embate, ele queria provar que o **SUPERMAN** não era um homem totalmente de aço, já que muitas pessoas se sentiam **ameaçadas** pela grandiosidade do Superman, mesmo que sendo minorias. Batman entretanto, não formou uma aliança, mas operava sozinho em grande escala para promover um combate entre ele e o Superman.`]
              }
            ]
          }
        ]
      }
    ],
  },

  "segunda-season": {
    emojiTitulo: "🐜",
    titulo: "Invasão Simbionte",
    data: "09/12/2026",
    capitulos: [
      {
        emoji: "📖",
        titulo: "𝐏𝐘𝐌capitulação",
        recolhivel: true,
        blocos: [
          {
            tipo: "texto",
            texto: "# DESFECHO DA GUERRA CIVIL"
          },
          {
            tipo: "citacao",
            paragrafos: [`As frentes de batalha se desenvolveram em duas. Na frente do **CAPITÓLIO DE WASHINGTON**, aconteceu uma batalha final entre os grupos dos **Áulicos** e os **Insurgentes**, numa batalha brutal que destruiu parte da estrutura fundamental dos Estados Unidos, como um símbolo de que a **democracia havia acabado** quando os heróis decidiram tomar uma iniciativa, entretanto no fim, **os Áulicos venceram**. Enquanto isso, na Rússia em um laboratório da **HYDRA** onde **TOM BAKER** e **STEVE ROGERS** investigavam o fim do primeiro **CAPITÃO BRITÂNIA** após uma missão, Tom começa a se recordar dos experimentos da HYDRA. Durante o diálogo deles, **HOMEM DE FERRO** chega após perseguir os dois, no começo pareceram amigáveis em descobrir o fim do lendário herói britânico, mas organizado por **ARNIM ZOLA** e **BARÃO ZEMO II**, é mostrado para Matthew Stark que Tom, na época de Soldado Invernal, **matou os familiares do Stark**, o sangue de Matthew circulou mais rápido pedindo por vingança, e ali foi o desfecho final da Guerra Civil, onde o Homem de Ferro **massacrou** os dois supersoldados, provando para os três que não havia certo ou errado naquela guerra, mas sim ideologias diferentes por formações diferentes. Matthew prendeu os dois na balsa após o ocorrido.`]
          },
          {
            tipo: "texto",
            texto: "# BATMAN VS. SUPERMAN, A BATALHA FINAL"
          },
          {
            tipo: "citacao",
            paragrafos: [`O tão esperado embate aconteceu, mas, Batman estava além do que Superman poderia imaginar. Em **METRÓPOLIS**, o embate estava começando. O que **SUPERMAN** não contava era que **BATMAN** teve acesso a recursos inéditos da Segunda Guerra Mundial, o embate entre **ÁTOMO I** e **OVERMAN** e a substância alienígena que Átomo absorveu, então Batman foi atrás do Átomo atual, **RAYMOND THOMPSON**, neto de **ARTHUR THOMPSON**, que replicou os elementos dos arquivos e criou uma **kryptonita artificial**. Enquanto a luta acontecia, quando Superman achava que havia conseguido superar Batman, ele foi atingido pelas costas por Átomo utilizando ondas de radiação de kryptonita nos punhos, e então Átomo e Superman começaram a travar uma batalha que **atravessou o país** e teve sua conclusão no **DESERTO DA GRANDE BACIA**, onde ocorreu um "empate". Mas Átomo era um "novo combatente", e Superman conseguiu retornar e finalizar seu embate com o Batman, onde o **Superman o derrotou** mesmo após batalhas brutais, já que Batman não conhecia ainda o **cristal da kryptonita.**`]
          }
        ]
      },
      {
        emoji: "🪐",
        titulo: "Lore Season 2",
        blocos: [
          {
            tipo: "citacao",
            paragrafos: [`O mundo vivia em calma depois da **GUERRA TOTAL**. O governo dos **ESTADOS UNIDOS** recuou e transformou o **ATO DE REGISTRO DE SUPER-HERÓIS** em um programa voluntário, oferecendo apoio econômico e midiático a quem se cadastrasse, sem forçar quem não quisesse. A decisão veio depois de manifestos públicos nas ruas, que ganharam força com o slogan: **#HERÓISPARAOSHERÓIS**.`]
          },
          {
            tipo: "citacao",
            paragrafos:[`Mas a paz em **PYM-CITY** nunca durava muito. O antigo inimigo do **HOMEM-ARANHA**, o **VENOM**, vinha agindo de forma estranha nas últimas semanas, e o mesmo acontecia com o **CARNIFICINA**. O próprio Homem-Aranha relatou publicamente que os dois estavam "estranhamente pacíficos", algo próximo do medo. Não muito depois, uma pequena chuva ácida caiu sobre Pym-City, deixando algumas gotas pretas que, após três dias, se uniram e formaram um simbionte. As forças policiais locais conseguiram contê-lo, mas ele não era exatamente igual ao Venom nem ao Carnificina.`]
          },
          {
            tipo: "citacao",
            paragrafos:[`Entretanto, aquilo era apenas o arauto de alguém muito pior. **KNULL**, um ser mitológico nascido junto com a origem do Universo, ao lado de quase todas as forças místicas, é o **REI DAS TREVAS**, citado de formas diferentes em quase todas as mitologias. Sua segunda onda de ataque começou, com um exército de morcegos simbiontes avançando sobre a Terra. Como se não bastasse apenas isso, um **ECLIPSE** sobrenatural começou a se formar por todo o planeta. Todas as forças possíveis foram mobilizadas ao longo do globo, mas a dúvida da população era: **ONDE ESTÃO OS HERÓIS?**`]
          }
        ]
      }
    ],
    
    subtramas: [
      {
        emoji: "🪽",
        titulo: "A Invasão Thanagariana",
        data: "05/02/2026",
        capitulos: [
          {
            emoji: "📖",
            titulo: "𝐏𝐘𝐌capitulação",
            recolhivel: true,
            blocos: [
              {
                tipo: "citacao",
                paragrafos: [`A invasão do **KNULL** foi brutal. Em poucas horas ele dominou o planeta, enquanto o **ECLIPSE antinatural** cobria a Terra e os morcegos simbiontes consumiam cidade após cidade. Informados pela SWORD de que a fraqueza dos simbiontes era o fogo, três heróis de poder energético partiram para cima dele: **SENTINELA**, **SUPERMAN** e **MANCHA SOLAR**. Mas o **KNULL** os derrotou rapidamente. O **SENTINELA** ainda tentou levar o vilão aos céus, mas foi pego e partido em dois.`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Os heróis foram sendo capturados pelos simbiontes um a um, e os que restaram fugiram para uma base secreta da **SHIELD/SWORD**, fora de todos os radares. Foi lá, com as poucas bases de sobreviventes sendo dominadas, que eles deixaram a briga do passado de lado e decidiram focar em salvar a Terra. Perceberam que **VENOM** e **CARNIFICINA** não podiam ser infectados, e por isso se tornaram a linha de frente, ao lado de, Superman, e da **MULHER-MARAVILHA** e os outros místicos, que davam um respiro às pessoas.`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Foi então que **THOR retornou**, depois da **GUERRA TOTAL** (da qual ele e o HULK haviam participado apenas pontualmente, mantendo-se neutros), e passou a enfrentar o **KNULL**. O **MJOLNIR**, forjado com materiais divinos, feria o vilão, mas depois de uma batalha acirrada **THOR foi derrotado** e o martelo foi jogado longe. No mesmo instante o **SURFISTA PRATEADO** chegou e o desafiou, sendo derrotado e tendo sua prancha separada do corpo.`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Os heróis traçaram então a **INVESTIDA FINAL**. O simbionte coletado pela polícia de **PYM-CITY** foi entregue a **HANK PYM** e **MATTHEW STARK**, que o “desacordaram” e o reprogramaram para formar trajes simbiontes para o **BATMAN** e o **HOMEM DE FERRO**. O traje do **SUPERMAN**, que armazena energia do Sol para recarregar as células kryptonianas dele, foi sobrecarregado e a energia entregue a **VENOM** e **CARNIFICINA**, deixando o herói totalmente exposto. Os demais heróis contribuíram: **SR. DESTINO** (Steven Khamun), **MULHER-MARAVILHA**, **LANTERNA VERDE** (Hal Jordan), **LANTERNA AZUL** (Dennis Thompson) e **CAPITÃO BRITÂNIA** (Isaiah Braddock).`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Na batalha final, todos os heróis acabaram consumidos pelos simbiontes, incluindo Homem de Ferro e Batman. Foi então que **VENOM** e **CARNIFICINA** assumiram o compromisso e o protagonismo, arriscando tudo para derrotar o **KNULL** e, acreditando que o evaporariam, jogaram seu corpo no Sol. Com a queda do Knull, os hospedeiros foram libertados.`]
              }
            ]
          },
          {
            emoji: "🦅",
            titulo: "Lore Season 2.1",
            blocos: [
              {
                tipo: "citacao",
                paragrafos: [`Depois da queda do **KNULL**, a Terra ainda cheirava a fumaça. Mas num planeta recheado de superhumanos, ninguém precisou esperar anos para reconstruí-lo. Com a ajuda dos heróis e, principalmente, do **HOMEM-TIJOLO**, cidades inteiras voltaram a ficar de pé em poucas semanas, e o mundo respirou, mesmo ainda de luto pelo **SENTINELA**.`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Foi quando o céu de **PYM-CITY** se abriu outra vez. Uma frota de naves que ninguém reconhecia cobriu o horizonte, e a transmissão que chegou a todos os televisores não pedia paz: "Vocês ficaram com o que era nosso." Do convés da nave-mãe desceu **VALDAR KYR**, o **MARECHAL-REGENTE** de **THANAGAR**, com armadura e asas de **metal ENÉSIMO**. Os heróis, se prepararam para outra guerra. O **ASTROMAN**, herdeiro do trono de THANAGAR que estava na Terra ajudando os heróis, reconheceu o brasão do marechal e empalideceu. Mas bastou a primeira onda tocar o solo para os invasores hesitarem. Diante de um planeta que acabara de derrubar um deus ancestral, os **THANAGARIANOS** recuaram. A Terra respirou aliviada, mas a pergunta ficou: o que a Terra tinha tirado de **THANAGAR?**`]
              },
              {
                tipo: "citacao",
                paragrafos: [`Poucos dias depois, eles voltaram, e dessa vez não vieram sozinhos. À frente da segunda investida marchavam **MUTANTES** e **INUMANOS**, os mesmos que os humanos aprenderam a temer, agora ao lado de **VALDAR KYR**. Diziam ter encontrado um povo que os aceitava, um lar. Mas os heróis perceberam o que a promessa escondia: os olhos dos controlados estavam vazios, e um brilho de metal estranho corria sob a pele deles. Agora os heróis tinham de enfrentar antigos aliados, e o mundo, pela primeira vez, já não sabia mais quem eram os vilões.`]
              }
            ]
          }
        ]
      }
    ]
  },
};