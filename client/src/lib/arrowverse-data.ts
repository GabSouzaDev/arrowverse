export interface Episode {
  id: string;
  title: string;
  series: string;
  season: number;
  episode: number;
  airDate: string;
  year: number;
  isCrossover: boolean;
  crossoverParts?: string[];
  summary?: string;
  runtime?: number;
  rating?: number;
}

export const arrowverseData: Record<number, Episode[]> = {
  2012: [
    { id: 'arrow-s01e01', title: 'Pilot', series: 'Arrow', season: 1, episode: 1, airDate: '2012-10-10', year: 2012, isCrossover: false, summary: 'Oliver Queen retorna a Starling City após cinco anos náufrago em uma ilha. Ele se torna o vigilante conhecido como Capuz para combater a corrupção e o crime em sua cidade.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s01e02', title: 'Honor Thy Father', series: 'Arrow', season: 1, episode: 2, airDate: '2012-10-17', year: 2012, isCrossover: false, summary: 'Oliver continua sua missão de limpar a cidade visando o empresário corrupto Adam Hunt. Enquanto isso, ele tenta se reconectar com sua família.', runtime: 42, rating: 7.9 },
    { id: 'arrow-s01e03', title: 'Lone Gunmen', series: 'Arrow', season: 1, episode: 3, airDate: '2012-10-24', year: 2012, isCrossover: false, summary: 'Oliver enfrenta um novo assassino que usa armas de fogo, forçando-o a repensar seus métodos de combate ao crime.', runtime: 42, rating: 7.8 },
    { id: 'arrow-s01e04', title: 'An Innocent Man', series: 'Arrow', season: 1, episode: 4, airDate: '2012-10-31', year: 2012, isCrossover: false, summary: 'Oliver tenta salvar um homem inocente da prisão enquanto lida com as consequências de suas ações como vigilante.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s01e05', title: 'Damaged', series: 'Arrow', season: 1, episode: 5, airDate: '2012-11-07', year: 2012, isCrossover: false, summary: 'Oliver é preso como suspeito de ser o Capuz, forçando-o a encontrar uma maneira de provar sua inocência.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s01e06', title: 'Legacies', series: 'Arrow', season: 1, episode: 6, airDate: '2012-11-14', year: 2012, isCrossover: false, summary: 'Oliver enfrenta uma família de ladrões de banco enquanto explora seu próprio legado familiar.', runtime: 42, rating: 7.7 },
    { id: 'arrow-s01e07', title: 'Muse of Fire', series: 'Arrow', season: 1, episode: 7, airDate: '2012-11-28', year: 2012, isCrossover: false, summary: 'Uma nova vigilante feminina aparece em Starling City, causando tensão entre Oliver e sua missão.', runtime: 42, rating: 7.9 },
    { id: 'arrow-s01e08', title: 'Vendetta', series: 'Arrow', season: 1, episode: 8, airDate: '2012-12-05', year: 2012, isCrossover: false, summary: 'Oliver continua lidando com a vigilante Huntress enquanto enfrenta novos desafios em sua guerra contra o crime.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s01e09', title: 'Year\'s End', series: 'Arrow', season: 1, episode: 9, airDate: '2012-12-12', year: 2012, isCrossover: false, summary: 'Um arqueiro sombrio aparece em Starling City, desafiando Oliver e forçando-o a questionar seus métodos.', runtime: 42, rating: 8.3 }
  ],
  2013: [
    { id: 'arrow-s01e10', title: 'Burned', series: 'Arrow', season: 1, episode: 10, airDate: '2013-01-16', year: 2013, isCrossover: false, summary: 'Oliver ajuda um bombeiro que está sendo perseguido por um piromaníaco vingativo.', runtime: 42, rating: 7.8 },
    { id: 'arrow-s01e11', title: 'Trust But Verify', series: 'Arrow', season: 1, episode: 11, airDate: '2013-01-23', year: 2013, isCrossover: false, summary: 'Oliver investiga o pai de Diggle quando suspeita que ele está envolvido em atividades criminosas.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s01e12', title: 'Vertigo', series: 'Arrow', season: 1, episode: 12, airDate: '2013-01-30', year: 2013, isCrossover: false, summary: 'Oliver enfrenta um traficante de drogas conhecido como Count Vertigo.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s01e13', title: 'Betrayal', series: 'Arrow', season: 1, episode: 13, airDate: '2013-02-06', year: 2013, isCrossover: false, summary: 'Oliver descobre que alguém próximo a ele está traindo sua confiança.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s01e14', title: 'The Odyssey', series: 'Arrow', season: 1, episode: 14, airDate: '2013-02-13', year: 2013, isCrossover: false, summary: 'Flashbacks revelam como Oliver conheceu Slade Wilson na ilha e como eles se tornaram aliados.', runtime: 42, rating: 8.5 },
    { id: 'arrow-s01e15', title: 'Dodger', series: 'Arrow', season: 1, episode: 15, airDate: '2013-02-20', year: 2013, isCrossover: false, summary: 'Oliver persegue um ladrão habilidoso conhecido como Dodger enquanto navega em sua vida pessoal.', runtime: 42, rating: 7.9 },
    { id: 'arrow-s01e16', title: 'Dead to Rights', series: 'Arrow', season: 1, episode: 16, airDate: '2013-02-27', year: 2013, isCrossover: false, summary: 'Malcolm Merlyn se torna um alvo direto quando Oliver descobre mais sobre seus planos sinistros.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s01e17', title: 'The Huntress Returns', series: 'Arrow', season: 1, episode: 17, airDate: '2013-03-20', year: 2013, isCrossover: false, summary: 'Helena Bertinelli retorna a Starling City em busca de vingança contra seu pai.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s01e18', title: 'Salvation', series: 'Arrow', season: 1, episode: 18, airDate: '2013-03-27', year: 2013, isCrossover: false, summary: 'Um vigilante rival começa a executar criminosos publicamente, forçando Oliver a intervir.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s01e19', title: 'Unfinished Business', series: 'Arrow', season: 1, episode: 19, airDate: '2013-04-03', year: 2013, isCrossover: false, summary: 'Oliver enfrenta Count Vertigo novamente quando a droga Vertigo reaparece nas ruas.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s01e20', title: 'Home Invasion', series: 'Arrow', season: 1, episode: 20, airDate: '2013-04-24', year: 2013, isCrossover: false, summary: 'Oliver protege a família Lance quando um assassino profissional os tem como alvo.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s01e21', title: 'The Undertaking', series: 'Arrow', season: 1, episode: 21, airDate: '2013-05-01', year: 2013, isCrossover: false, summary: 'Os verdadeiros planos de Malcolm Merlyn são revelados, ameaçando toda Starling City.', runtime: 42, rating: 8.7 },
    { id: 'arrow-s01e22', title: 'Darkness on the Edge of Town', series: 'Arrow', season: 1, episode: 22, airDate: '2013-05-08', year: 2013, isCrossover: false, summary: 'Oliver tenta impedir Malcolm de destruir os Glades em uma batalha épica.', runtime: 42, rating: 8.8 },
    { id: 'arrow-s01e23', title: 'Sacrifice', series: 'Arrow', season: 1, episode: 23, airDate: '2013-05-15', year: 2013, isCrossover: false, summary: 'O final explosivo da primeira temporada onde Oliver enfrenta as consequências de suas escolhas.', runtime: 42, rating: 9.0 },
    { id: 'arrow-s02e01', title: 'City of Heroes', series: 'Arrow', season: 2, episode: 1, airDate: '2013-10-09', year: 2013, isCrossover: false, summary: 'Oliver retorna a Starling City para reconstruir sua equipe e enfrentar as consequências dos eventos dos Glades.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s02e02', title: 'Identity', series: 'Arrow', season: 2, episode: 2, airDate: '2013-10-16', year: 2013, isCrossover: false, summary: 'Oliver enfrenta novos vigilantes que estão operando em sua cidade.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s02e03', title: 'Broken Dolls', series: 'Arrow', season: 2, episode: 3, airDate: '2013-10-23', year: 2013, isCrossover: false, summary: 'Um serial killer conhecido como Dollmaker escapa da prisão e retoma seus crimes horríveis.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s02e04', title: 'Crucible', series: 'Arrow', season: 2, episode: 4, airDate: '2013-10-30', year: 2013, isCrossover: false, summary: 'Oliver investiga uma nova droga que está devastando os Glades.', runtime: 42, rating: 7.9 },
    { id: 'arrow-s02e05', title: 'League of Assassins', series: 'Arrow', season: 2, episode: 5, airDate: '2013-11-06', year: 2013, isCrossover: false, summary: 'A Liga dos Assassinos chega a Starling City em busca de Sara Lance.', runtime: 42, rating: 8.4 },
    { id: 'arrow-s02e06', title: 'Keep Your Enemies Closer', series: 'Arrow', season: 2, episode: 6, airDate: '2013-11-13', year: 2013, isCrossover: false, summary: 'Oliver e Diggle viajam para a Rússia para resgatar Lyla das mãos de um perigoso criminoso.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s02e07', title: 'State v. Queen', series: 'Arrow', season: 2, episode: 7, airDate: '2013-11-20', year: 2013, isCrossover: false, summary: 'Moira Queen enfrenta julgamento por sua participação no Undertaking.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s02e08', title: 'The Scientist', series: 'Arrow', season: 2, episode: 8, airDate: '2013-12-04', year: 2013, isCrossover: false, summary: 'Barry Allen chega a Starling City para investigar um caso impossível, preparando o terreno para The Flash.', runtime: 42, rating: 8.5 },
    { id: 'arrow-s02e09', title: 'Three Ghosts', series: 'Arrow', season: 2, episode: 9, airDate: '2013-12-11', year: 2013, isCrossover: false, summary: 'Oliver enfrenta três inimigos de seu passado enquaanto Barry Allen o ajuda a resolver um mistério científico.', runtime: 42, rating: 8.6 }
  ],
  2014: [
    { id: 'arrow-s02e10', title: 'Blast Radius', series: 'Arrow', season: 2, episode: 10, airDate: '2014-01-15', year: 2014, isCrossover: false, summary: 'Oliver enfrenta um terrorista que usa bombas para enviar uma mensagem política.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s02e11', title: 'Blind Spot', series: 'Arrow', season: 2, episode: 11, airDate: '2014-01-22', year: 2014, isCrossover: false, summary: 'Laurel investiga Sebastian Blood, mas Oliver não acredita em suas suspeitas.', runtime: 42, rating: 7.8 },
    { id: 'arrow-s02e12', title: 'Tremors', series: 'Arrow', season: 2, episode: 12, airDate: '2014-01-29', year: 2014, isCrossover: false, summary: 'Oliver tenta ajudar Roy a controlar seus novos poderes enquanto enfrenta Bronze Tiger.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s02e13', title: 'Heir to the Demon', series: 'Arrow', season: 2, episode: 13, airDate: '2014-02-05', year: 2014, isCrossover: false, summary: 'Nyssa al Ghul vem a Starling City procurar por Sara Lance.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s02e14', title: 'Time of Death', series: 'Arrow', season: 2, episode: 14, airDate: '2014-02-26', year: 2014, isCrossover: false, summary: 'Oliver enfrenta um hacker conhecido como Clock King que pode prever seus movimentos.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s02e15', title: 'The Promise', series: 'Arrow', season: 2, episode: 15, airDate: '2014-03-05', year: 2014, isCrossover: false, summary: 'Slade Wilson confronta Oliver em uma batalha épica que combina presente e passado.', runtime: 42, rating: 9.1 },
    { id: 'arrow-s02e16', title: 'Suicide Squad', series: 'Arrow', season: 2, episode: 16, airDate: '2014-03-19', year: 2014, isCrossover: false, summary: 'Diggle se junta ao Esquadrão Suicida em uma missão perigosa.', runtime: 42, rating: 8.5 },
    { id: 'arrow-s02e17', title: 'Birds of Prey', series: 'Arrow', season: 2, episode: 17, airDate: '2014-03-26', year: 2014, isCrossover: false, summary: 'Helena Bertinelli escapa da prisão e força Oliver a confrontar seu passado.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s02e18', title: 'Deathstroke', series: 'Arrow', season: 2, episode: 18, airDate: '2014-04-02', year: 2014, isCrossover: false, summary: 'Slade Wilson intensifica seu ataque pessoal contra Oliver Queen.', runtime: 42, rating: 8.7 },
    { id: 'arrow-s02e19', title: 'The Man Under the Hood', series: 'Arrow', season: 2, episode: 19, airDate: '2014-04-16', year: 2014, isCrossover: false, summary: 'Oliver descobre os verdadeiros planos de Slade Wilson para Starling City.', runtime: 42, rating: 8.4 },
    { id: 'arrow-s02e20', title: 'Seeing Red', series: 'Arrow', season: 2, episode: 20, airDate: '2014-04-23', year: 2014, isCrossover: false, summary: 'Roy Harper perde o controle de sua raiva, forçando Oliver a tomar medidas drásticas.', runtime: 42, rating: 8.6 },
    { id: 'arrow-s02e21', title: 'City of Blood', series: 'Arrow', season: 2, episode: 21, airDate: '2014-04-30', year: 2014, isCrossover: false, summary: 'Slade Wilson assume o controle de Starling City enquanto Oliver planeja sua resposta.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s02e22', title: 'Streets of Fire', series: 'Arrow', season: 2, episode: 22, airDate: '2014-05-07', year: 2014, isCrossover: false, summary: 'A guerra entre Oliver e Slade atinge seu clímax nas ruas de Starling City.', runtime: 42, rating: 8.8 },
    { id: 'arrow-s02e23', title: 'Unthinkable', series: 'Arrow', season: 2, episode: 23, airDate: '2014-05-14', year: 2014, isCrossover: false, summary: 'Oliver enfrenta Slade Wilson em uma batalha final que decide o destino da cidade.', runtime: 42, rating: 9.0 },
    { id: 'flash-s01e01', title: 'Pilot', series: 'The Flash', season: 1, episode: 1, airDate: '2014-10-07', year: 2014, isCrossover: false, summary: 'Barry Allen desperta de um coma após ser atingido por um raio durante a explosão do acelerador de partículas. Ele descobre que tem super velocidade e inicia sua jornada como The Flash.', runtime: 42, rating: 8.7 },
    { id: 'arrow-s03e01', title: 'The Calm', series: 'Arrow', season: 3, episode: 1, airDate: '2014-10-08', year: 2014, isCrossover: false, summary: 'Oliver tenta equilibrar sua vida como Arrow com uma possível vida normal ao lado de Felicity.', runtime: 42, rating: 8.2 },
    { id: 'flash-s01e02', title: 'Fastest Man Alive', series: 'The Flash', season: 1, episode: 2, airDate: '2014-10-14', year: 2014, isCrossover: false, summary: 'Barry aprende a controlar melhor seus poderes enquanto enfrenta seu primeiro meta-humano.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s03e02', title: 'Sara', series: 'Arrow', season: 3, episode: 2, airDate: '2014-10-15', year: 2014, isCrossover: false, summary: 'Sara Lance é assassinada, levando Oliver e sua equipe a uma caçada desesperada pelo assassino.', runtime: 42, rating: 8.5 },
    { id: 'flash-s01e03', title: 'Things You Can\'t Outrun', series: 'The Flash', season: 1, episode: 3, airDate: '2014-10-21', year: 2014, isCrossover: false, summary: 'Barry enfrenta um meta-humano que pode se transformar em gás venenoso.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s03e03', title: 'Corto Maltese', series: 'Arrow', season: 3, episode: 3, airDate: '2014-10-22', year: 2014, isCrossover: false, summary: 'Oliver e Diggle viajam para Corto Maltese para resgatar Lyla e encontrar Thea.', runtime: 42, rating: 8.0 },
    { id: 'constantine-s01e01', title: 'Non Est Asylum', series: 'Constantine', season: 1, episode: 1, airDate: '2014-10-24', year: 2014, isCrossover: false, summary: 'John Constantine é forçado a sair da reclusão para investigar o suicídio de sua amiga Liv.', runtime: 42, rating: 7.5 },
    { id: 'flash-s01e04', title: 'Going Rogue', series: 'The Flash', season: 1, episode: 4, airDate: '2014-10-28', year: 2014, isCrossover: false, summary: 'Barry enfrenta Leonard Snart, que se torna Captain Cold com uma arma que pode congelar qualquer coisa.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s03e04', title: 'The Magician', series: 'Arrow', season: 3, episode: 4, airDate: '2014-10-29', year: 2014, isCrossover: false, summary: 'Oliver confronta Malcolm Merlyn sobre o assassinato de Sara Lance.', runtime: 42, rating: 8.4 },
    { id: 'constantine-s01e02', title: 'The Darkness Beneath', series: 'Constantine', season: 1, episode: 2, airDate: '2014-10-31', year: 2014, isCrossover: false, summary: 'Constantine investiga uma série de acidentes de mineração em uma pequena cidade da Pensilvânia.', runtime: 42, rating: 7.3 },
    { id: 'arrow-s03e05', title: 'The Secret Origin of Felicity Smoak', series: 'Arrow', season: 3, episode: 5, airDate: '2014-11-05', year: 2014, isCrossover: false, summary: 'O passado de Felicity é revelado quando ela se torna alvo de um hacker de sua época de faculdade.', runtime: 42, rating: 8.3 },
    { id: 'constantine-s01e03', title: 'The Devil\'s Vinyl', series: 'Constantine', season: 1, episode: 3, airDate: '2014-11-07', year: 2014, isCrossover: false, summary: 'Constantine deve encontrar e destruir um disco amaldiçoado que está causando mortes em Chicago.', runtime: 42, rating: 7.4 },
    { id: 'flash-s01e05', title: 'Plastique', series: 'The Flash', season: 1, episode: 5, airDate: '2014-11-11', year: 2014, isCrossover: false, summary: 'Barry conhece Plastique, uma meta-humana que pode transformar qualquer coisa que toca em explosivo.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s03e06', title: 'Guilty', series: 'Arrow', season: 3, episode: 6, airDate: '2014-11-12', year: 2014, isCrossover: false, summary: 'Oliver enfrenta Ted Grant enquanto investiga mais sobre o passado de Sara Lance.', runtime: 42, rating: 8.1 },
    { id: 'constantine-s01e04', title: 'A Feast of Friends', series: 'Constantine', season: 1, episode: 4, airDate: '2014-11-14', year: 2014, isCrossover: false, summary: 'Um velho amigo de Constantine pede sua ajuda, mas a situação se complica rapidamente.', runtime: 42, rating: 7.6 },
    { id: 'flash-s01e06', title: 'The Flash Is Born', series: 'The Flash', season: 1, episode: 6, airDate: '2014-11-18', year: 2014, isCrossover: false, summary: 'Barry adota oficialmente o nome "The Flash" enquanto enfrenta Tony Woodward, um meta-humano com pele de aço.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s03e07', title: 'Draw Back Your Bow', series: 'Arrow', season: 3, episode: 7, airDate: '2014-11-19', year: 2014, isCrossover: false, summary: 'Oliver enfrenta Cupid, uma vigilante obcecada por ele que acredita que eles são almas gêmeas.', runtime: 42, rating: 7.9 },
    { id: 'constantine-s01e05', title: 'Danse Vaudou', series: 'Constantine', season: 1, episode: 5, airDate: '2014-11-21', year: 2014, isCrossover: false, summary: 'Constantine viaja para Nova Orleans para investigar rituais de voodoo que estão ressuscitando os mortos.', runtime: 42, rating: 7.5 },
    { id: 'flash-s01e07', title: 'Power Outage', series: 'The Flash', season: 1, episode: 7, airDate: '2014-11-25', year: 2014, isCrossover: false, summary: 'Barry perde temporariamente seus poderes quando enfrenta Blackout, um meta-humano que pode absorver eletricidade.', runtime: 42, rating: 8.1 },
    { id: 'constantine-s01e06', title: 'Rage of Caliban', series: 'Constantine', season: 1, episode: 6, airDate: '2014-11-28', year: 2014, isCrossover: false, summary: 'Constantine deve parar uma criatura supernatural que está aterrorizando uma família em Illinois.', runtime: 42, rating: 7.4 },
    { id: 'flash-s01e08', title: 'Flash vs Arrow', series: 'The Flash', season: 1, episode: 8, airDate: '2014-12-02', year: 2014, isCrossover: true, crossoverParts: ['flash-s01e08', 'arrow-s03e08'], summary: 'O primeiro grande crossover entre The Flash e Arrow! Barry Allen e Oliver Queen se encontram pela primeira vez quando Barry viaja para Starling City. Este evento épico estabelece a base para futuros crossovers do Arrowverse.', runtime: 42, rating: 9.1 },
    { id: 'arrow-s03e08', title: 'The Brave and the Bold', series: 'Arrow', season: 3, episode: 8, airDate: '2014-12-03', year: 2014, isCrossover: true, crossoverParts: ['flash-s01e08', 'arrow-s03e08'], summary: 'A segunda parte do primeiro crossover Flash/Arrow. Oliver e Barry trabalham juntos para derrotar Captain Boomerang enquanto aprendem a trabalhar como equipe.', runtime: 42, rating: 9.0 },
    { id: 'constantine-s01e07', title: 'Blessed Are the Damned', series: 'Constantine', season: 1, episode: 7, airDate: '2014-12-05', year: 2014, isCrossover: false, summary: 'Constantine investiga um pregador que afirma ter poderes curativos divinos.', runtime: 42, rating: 7.3 },
    { id: 'flash-s01e09', title: 'The Man in the Yellow Suit', series: 'The Flash', season: 1, episode: 9, airDate: '2014-12-09', year: 2014, isCrossover: false, summary: 'Barry finalmente enfrenta o Homem de Amarelo, o velocista que matou sua mãe.', runtime: 42, rating: 9.0 },
    { id: 'arrow-s03e09', title: 'The Climb', series: 'Arrow', season: 3, episode: 9, airDate: '2014-12-10', year: 2014, isCrossover: false, summary: 'Oliver enfrenta Ra\'s al Ghul em um duelo mortal no topo de uma montanha.', runtime: 42, rating: 9.2 },
    { id: 'constantine-s01e08', title: 'The Saint of Last Resorts', series: 'Constantine', season: 1, episode: 8, airDate: '2014-12-12', year: 2014, isCrossover: false, summary: 'Constantine viaja para o México para salvar a filha de um velho amigo.', runtime: 42, rating: 7.6 }
  ],
  2015: [
    { id: 'constantine-s01e09', title: 'The Saint of Last Resorts (Part 2)', series: 'Constantine', season: 1, episode: 9, airDate: '2015-01-16', year: 2015, isCrossover: false, summary: 'Continuação da história no México onde Constantine enfrenta forças demoníacas.', runtime: 42, rating: 7.5 },
    { id: 'flash-s01e10', title: 'Revenge of the Rogues', series: 'The Flash', season: 1, episode: 10, airDate: '2015-01-20', year: 2015, isCrossover: false, summary: 'Captain Cold retorna com Heat Wave para se vingar do Flash.', runtime: 42, rating: 8.4 },
    { id: 'arrow-s03e10', title: 'Left Behind', series: 'Arrow', season: 3, episode: 10, airDate: '2015-01-21', year: 2015, isCrossover: false, summary: 'A equipe lida com a aparente morte de Oliver enquanto Felicity e Diggle tentam continuar sua missão.', runtime: 42, rating: 8.3 },
    { id: 'constantine-s01e10', title: 'Quid Pro Quo', series: 'Constantine', season: 1, episode: 10, airDate: '2015-01-23', year: 2015, isCrossover: false, summary: 'Constantine deve salvar Chas de uma maldição supernatural.', runtime: 42, rating: 7.4 },
    { id: 'flash-s01e11', title: 'The Sound and the Fury', series: 'The Flash', season: 1, episode: 11, airDate: '2015-01-27', year: 2015, isCrossover: false, summary: 'Barry enfrenta Pied Piper, um ex-funcionário da STAR Labs que pode controlar o som.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s03e11', title: 'Midnight City', series: 'Arrow', season: 3, episode: 11, airDate: '2015-01-28', year: 2015, isCrossover: false, summary: 'Starling City enfrenta o caos sem Oliver enquanto a equipe tenta manter a ordem.', runtime: 42, rating: 8.0 },
    { id: 'constantine-s01e11', title: 'A Whole World Out There', series: 'Constantine', season: 1, episode: 11, airDate: '2015-01-30', year: 2015, isCrossover: false, summary: 'Constantine entra em uma dimensão alternativa para salvar uma jovem.', runtime: 42, rating: 7.5 },
    { id: 'flash-s01e12', title: 'Crazy for You', series: 'The Flash', season: 1, episode: 12, airDate: '2015-02-03', year: 2015, isCrossover: false, summary: 'Barry desenvolve sentimentos por Linda Park enquanto enfrenta Peek-a-Boo, uma meta-humana que pode se teletransportar.', runtime: 42, rating: 8.0 },
    { id: 'arrow-s03e12', title: 'Uprising', series: 'Arrow', season: 3, episode: 12, airDate: '2015-02-04', year: 2015, isCrossover: false, summary: 'A equipe Arrow luta para salvar a cidade de Brick enquanto aguarda o retorno de Oliver.', runtime: 42, rating: 8.2 },
    { id: 'constantine-s01e12', title: 'Angels and Ministers of Grace', series: 'Constantine', season: 1, episode: 12, airDate: '2015-02-06', year: 2015, isCrossover: false, summary: 'Constantine deve parar um anjo caído que está matando médicos.', runtime: 42, rating: 7.3 },
    { id: 'flash-s01e13', title: 'The Nuclear Man', series: 'The Flash', season: 1, episode: 13, airDate: '2015-02-10', year: 2015, isCrossover: false, summary: 'Barry enfrenta Firestorm quando Ronnie Raymond retorna com poderes nucleares.', runtime: 42, rating: 8.5 },
    { id: 'arrow-s03e13', title: 'Canaries', series: 'Arrow', season: 3, episode: 13, airDate: '2015-02-11', year: 2015, isCrossover: false, summary: 'Oliver retorna para encontrar Starling City em caos e deve reconstruir sua equipe.', runtime: 42, rating: 8.4 },
    { id: 'constantine-s01e13', title: 'Waiting for the Man', series: 'Constantine', season: 1, episode: 13, airDate: '2015-02-13', year: 2015, isCrossover: false, summary: 'Constantine enfrenta Papa Midnite em um confronto final épico.', runtime: 42, rating: 7.6 },
    { id: 'flash-s01e14', title: 'Fallout', series: 'The Flash', season: 1, episode: 14, airDate: '2015-02-17', year: 2015, isCrossover: false, summary: 'Barry trabalha com Firestorm para parar General Eiling de capturar Ronnie Raymond.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s03e14', title: 'The Return', series: 'Arrow', season: 3, episode: 14, airDate: '2015-02-18', year: 2015, isCrossover: false, summary: 'Oliver e Thea retornam à ilha onde tudo começou para se reconectarem.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s03e15', title: 'Nanda Parbat', series: 'Arrow', season: 3, episode: 15, airDate: '2015-02-25', year: 2015, isCrossover: false, summary: 'Oliver deve resgatar Malcolm Merlyn da Liga dos Assassinos.', runtime: 42, rating: 8.3 },
    { id: 'flash-s01e15', title: 'Out of Time', series: 'The Flash', season: 1, episode: 15, airDate: '2015-03-17', year: 2015, isCrossover: false, summary: 'Barry viaja no tempo acidentalmente depois de correr rápido demais para parar Weather Wizard.', runtime: 42, rating: 9.0 },
    { id: 'arrow-s03e16', title: 'The Offer', series: 'Arrow', season: 3, episode: 16, airDate: '2015-03-18', year: 2015, isCrossover: false, summary: 'Ra\'s al Ghul oferece a Oliver a chance de se tornar o próximo Ra\'s al Ghul.', runtime: 42, rating: 8.2 },
    { id: 'flash-s01e16', title: 'Rogue Time', series: 'The Flash', season: 1, episode: 16, airDate: '2015-03-24', year: 2015, isCrossover: false, summary: 'Barry tenta consertar a linha temporal, mas acaba criando novos problemas com os Rogues.', runtime: 42, rating: 8.7 },
    { id: 'arrow-s03e17', title: 'Suicidal Tendencies', series: 'Arrow', season: 3, episode: 17, airDate: '2015-03-25', year: 2015, isCrossover: false, summary: 'Deadshot e o Esquadrão Suicida são enviados em uma missão enquanto Oliver enfrenta Ra\'s al Ghul.', runtime: 42, rating: 8.5 },
    { id: 'flash-s01e17', title: 'Tricksters', series: 'The Flash', season: 1, episode: 17, airDate: '2015-03-31', year: 2015, isCrossover: false, summary: 'Barry enfrenta os Tricksters, pai e filho, enquanto descobre mais sobre o Homem de Amarelo.', runtime: 42, rating: 8.8 },
    { id: 'arrow-s03e18', title: 'Public Enemy', series: 'Arrow', season: 3, episode: 18, airDate: '2015-04-01', year: 2015, isCrossover: false, summary: 'Oliver é considerado um inimigo público quando Ra\'s al Ghul implica o Arrow em vários assassinatos.', runtime: 42, rating: 8.4 },
    { id: 'flash-s01e18', title: 'All Star Team Up', series: 'The Flash', season: 1, episode: 18, airDate: '2015-04-14', year: 2015, isCrossover: false, summary: 'Ray Palmer e Felicity Smoak visitam Central City para ajudar Barry a capturar a meta-humana Brie Larvan.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s03e19', title: 'Broken Arrow', series: 'Arrow', season: 3, episode: 19, airDate: '2015-04-15', year: 2015, isCrossover: false, summary: 'Oliver trabalha com Ray Palmer para parar Deathbolt enquanto enfrenta as consequências de ser um fugitivo.', runtime: 42, rating: 8.2 },
    { id: 'flash-s01e19', title: 'Who Is Harrison Wells?', series: 'The Flash', season: 1, episode: 19, airDate: '2015-04-21', year: 2015, isCrossover: false, summary: 'A verdadeira identidade de Harrison Wells é revelada quando a equipe descobre que ele é Eobard Thawne.', runtime: 42, rating: 9.1 },
    { id: 'arrow-s03e20', title: 'The Fallen', series: 'Arrow', season: 3, episode: 20, airDate: '2015-04-22', year: 2015, isCrossover: false, summary: 'Oliver aceita a oferta de Ra\'s al Ghul para se tornar seu sucessor.', runtime: 42, rating: 8.3 },
    { id: 'flash-s01e20', title: 'The Trap', series: 'The Flash', season: 1, episode: 20, airDate: '2015-04-28', year: 2015, isCrossover: false, summary: 'Barry e sua equipe tentam capturar Reverse-Flash usando Cisco como isca.', runtime: 42, rating: 8.9 },
    { id: 'arrow-s03e21', title: 'Al Sah-him', series: 'Arrow', season: 3, episode: 21, airDate: '2015-04-29', year: 2015, isCrossover: false, summary: 'Oliver é transformado em Al Sah-him e deve se casar com Nyssa al Ghul.', runtime: 42, rating: 8.1 },
    { id: 'flash-s01e21', title: 'Grodd Lives', series: 'The Flash', season: 1, episode: 21, airDate: '2015-05-05', year: 2015, isCrossover: false, summary: 'Barry enfrenta Grodd, um gorila superinteligente que pode controlar mentes.', runtime: 42, rating: 8.6 },
    { id: 'arrow-s03e22', title: 'This Is Your Sword', series: 'Arrow', season: 3, episode: 22, airDate: '2015-05-06', year: 2015, isCrossover: false, summary: 'Oliver trabalha infiltrado para descobrir os verdadeiros planos de Ra\'s al Ghul.', runtime: 42, rating: 8.2 },
    { id: 'flash-s01e22', title: 'Rogue Air', series: 'The Flash', season: 1, episode: 22, airDate: '2015-05-12', year: 2015, isCrossover: false, summary: 'Barry deve trabalhar com Leonard Snart para transportar meta-humanos perigosos quando STAR Labs está em perigo.', runtime: 42, rating: 8.4 },
    { id: 'arrow-s03e23', title: 'My Name Is Oliver Queen', series: 'Arrow', season: 3, episode: 23, airDate: '2015-05-13', year: 2015, isCrossover: false, summary: 'Oliver enfrenta Ra\'s al Ghul em uma batalha final para salvar Starling City do vírus Alpha-Omega.', runtime: 42, rating: 8.7 },
    { id: 'flash-s01e23', title: 'Fast Enough', series: 'The Flash', season: 1, episode: 23, airDate: '2015-05-19', year: 2015, isCrossover: false, summary: 'Barry deve decidir se vai voltar no tempo para salvar sua mãe, sabendo que isso pode mudar tudo.', runtime: 42, rating: 9.0 },
    { id: 'vixen-s01e01', title: 'Episode 1', series: 'Vixen', season: 1, episode: 1, airDate: '2015-08-25', year: 2015, isCrossover: false, summary: 'Mari McCabe descobre o poder do colar Anansi e seus poderes animais.', runtime: 6, rating: 7.2 },
    { id: 'vixen-s01e02', title: 'Episode 2', series: 'Vixen', season: 1, episode: 2, airDate: '2015-09-01', year: 2015, isCrossover: false, summary: 'Vixen aprende mais sobre suas origens e seus poderes.', runtime: 6, rating: 7.1 },
    { id: 'vixen-s01e03', title: 'Episode 3', series: 'Vixen', season: 1, episode: 3, airDate: '2015-09-08', year: 2015, isCrossover: false, summary: 'Vixen enfrenta seu primeiro grande vilão.', runtime: 6, rating: 7.3 },
    { id: 'vixen-s01e04', title: 'Episode 4', series: 'Vixen', season: 1, episode: 4, airDate: '2015-09-15', year: 2015, isCrossover: false, summary: 'Mari descobre mais sobre o legado de sua família.', runtime: 6, rating: 7.0 },
    { id: 'vixen-s01e05', title: 'Episode 5', series: 'Vixen', season: 1, episode: 5, airDate: '2015-09-22', year: 2015, isCrossover: false, summary: 'Vixen enfrenta Benatu Eshu em uma batalha épica.', runtime: 6, rating: 7.4 },
    { id: 'vixen-s01e06', title: 'Episode 6', series: 'Vixen', season: 1, episode: 6, airDate: '2015-09-29', year: 2015, isCrossover: false, summary: 'Final da primeira temporada onde Vixen salva Detroit.', runtime: 6, rating: 7.5 },
    { id: 'flash-s02e01', title: 'The Man Who Saved Central City', series: 'The Flash', season: 2, episode: 1, airDate: '2015-10-06', year: 2015, isCrossover: false, summary: 'Barry lida com as consequências de criar um buraco negro enquanto trabalha sozinho como herói.', runtime: 42, rating: 8.4 },
    { id: 'arrow-s04e01', title: 'Green Arrow', series: 'Arrow', season: 4, episode: 1, airDate: '2015-10-07', year: 2015, isCrossover: false, summary: 'Oliver Queen retorna como Green Arrow com uma nova atitude mais esperançosa.', runtime: 42, rating: 8.3 },
    { id: 'flash-s02e02', title: 'Flash of Two Worlds', series: 'The Flash', season: 2, episode: 2, airDate: '2015-10-13', year: 2015, isCrossover: false, summary: 'Barry conhece Jay Garrick, um velocista de Terra-2 que precisa de sua ajuda.', runtime: 42, rating: 8.5 },
    { id: 'arrow-s04e02', title: 'The Candidate', series: 'Arrow', season: 4, episode: 2, airDate: '2015-10-14', year: 2015, isCrossover: false, summary: 'Thea Queen considera concorrer ao cargo de prefeita enquanto a equipe enfrenta novos inimigos.', runtime: 42, rating: 8.0 },
    { id: 'flash-s02e03', title: 'Family of Rogues', series: 'The Flash', season: 2, episode: 3, airDate: '2015-10-20', year: 2015, isCrossover: false, summary: 'Leonard Snart pede ajuda a Barry para lidar com seu pai abusivo.', runtime: 42, rating: 8.2 },
    { id: 'arrow-s04e03', title: 'Restoration', series: 'Arrow', season: 4, episode: 3, airDate: '2015-10-21', year: 2015, isCrossover: false, summary: 'Oliver e equipe viajam para Nanda Parbat para restaurar Sara Lance à vida.', runtime: 42, rating: 8.1 },
    { id: 'supergirl-s01e01', title: 'Pilot', series: 'Supergirl', season: 1, episode: 1, airDate: '2015-10-26', year: 2015, isCrossover: false, summary: 'Kara Danvers abraça seus poderes e se torna Supergirl quando deve salvar sua irmã adotiva Alex e um avião cheio de passageiros.', runtime: 42, rating: 7.8 },
    { id: 'flash-s02e04', title: 'The Fury of Firestorm', series: 'The Flash', season: 2, episode: 4, airDate: '2015-10-27', year: 2015, isCrossover: false, summary: 'Barry procura um novo parceiro para Martin Stein formar Firestorm.', runtime: 42, rating: 8.1 },
    { id: 'arrow-s04e04', title: 'Beyond Redemption', series: 'Arrow', season: 4, episode: 4, airDate: '2015-10-28', year: 2015, isCrossover: false, summary: 'Oliver enfrenta policiais corruptos que estão aterrorizando Star City.', runtime: 42, rating: 7.9 },
    { id: 'supergirl-s01e02', title: 'Stronger Together', series: 'Supergirl', season: 1, episode: 2, airDate: '2015-11-02', year: 2015, isCrossover: false, summary: 'Kara treina com sua irmã Alex e Hank Henshaw para melhorar suas habilidades como Supergirl.', runtime: 42, rating: 7.6 },
    { id: 'flash-s02e05', title: 'The Darkness and the Light', series: 'The Flash', season: 2, episode: 5, airDate: '2015-11-03', year: 2015, isCrossover: false, summary: 'Barry enfrenta Dr. Light, uma meta-humana de Terra-2, enquanto aprende sobre o multiverso.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s04e05', title: 'Haunted', series: 'Arrow', season: 4, episode: 5, airDate: '2015-11-04', year: 2015, isCrossover: false, summary: 'John Constantine ajuda Oliver a restaurar a alma de Sara Lance.', runtime: 42, rating: 8.4 },
    { id: 'supergirl-s01e03', title: 'Fight or Flight', series: 'Supergirl', season: 1, episode: 3, airDate: '2015-11-09', year: 2015, isCrossover: false, summary: 'Supergirl enfrenta Reactron, um metahumano que odeia todos os kryptonianos.', runtime: 42, rating: 7.5 },
    { id: 'flash-s02e06', title: 'Enter Zoom', series: 'The Flash', season: 2, episode: 6, airDate: '2015-11-10', year: 2015, isCrossover: false, summary: 'Barry enfrenta Zoom pela primeira vez em uma batalha que quase o mata.', runtime: 42, rating: 8.7 },
    { id: 'arrow-s04e06', title: 'Lost Souls', series: 'Arrow', season: 4, episode: 6, airDate: '2015-11-11', year: 2015, isCrossover: false, summary: 'A equipe tenta resgatar Ray Palmer que está preso no tamanho de um átomo.', runtime: 42, rating: 8.0 },
    { id: 'supergirl-s01e04', title: 'Livewire', series: 'Supergirl', season: 1, episode: 4, airDate: '2015-11-16', year: 2015, isCrossover: false, summary: 'Kara enfrenta Livewire, uma shock jock transformada em ser de eletricidade pura.', runtime: 42, rating: 7.4 },
    { id: 'supergirl-s01e05', title: 'How Does She Do It?', series: 'Supergirl', season: 1, episode: 5, airDate: '2015-11-23', year: 2015, isCrossover: false, summary: 'Supergirl deve equilibrar sua vida pessoal enquanto protege a cidade de bombas.', runtime: 42, rating: 7.3 },
    { id: 'supergirl-s01e06', title: 'Red Faced', series: 'Supergirl', season: 1, episode: 6, airDate: '2015-11-30', year: 2015, isCrossover: false, summary: 'Kara enfrenta um androide militar enquanto lida com sua raiva e controle emocional.', runtime: 42, rating: 7.5 },
    { id: 'flash-s02e08', title: 'Legends of Today', series: 'The Flash', season: 2, episode: 8, airDate: '2015-12-01', year: 2015, isCrossover: true, crossoverParts: ['flash-s02e08', 'arrow-s04e08'], summary: 'Primeira parte do crossover que introduz Hawkman e Hawkgirl, preparando o terreno para Legends of Tomorrow.', runtime: 42, rating: 8.6 },
    { id: 'arrow-s04e08', title: 'Legends of Yesterday', series: 'Arrow', season: 4, episode: 8, airDate: '2015-12-02', year: 2015, isCrossover: true, crossoverParts: ['flash-s02e08', 'arrow-s04e08'], summary: 'Segunda parte do crossover onde os heróis enfrentam Vandal Savage pela primeira vez.', runtime: 42, rating: 8.5 },
    { id: 'supergirl-s01e07', title: 'Human for a Day', series: 'Supergirl', season: 1, episode: 7, airDate: '2015-12-07', year: 2015, isCrossover: false, summary: 'Kara perde temporariamente seus poderes e deve proteger National City como humana.', runtime: 42, rating: 7.6 },
    { id: 'flash-s02e09', title: 'Running to Stand Still', series: 'The Flash', season: 2, episode: 9, airDate: '2015-12-08', year: 2015, isCrossover: false, summary: 'Weather Wizard, Captain Cold e Trickster fazem uma aliança para derrotar The Flash no Natal.', runtime: 42, rating: 8.3 },
    { id: 'arrow-s04e09', title: 'Dark Waters', series: 'Arrow', season: 4, episode: 9, airDate: '2015-12-09', year: 2015, isCrossover: false, summary: 'Damien Darhk sequestra Felicity, Thea, e Diggle, forçando Oliver a tomar medidas drásticas.', runtime: 42, rating: 8.2 },
    { id: 'supergirl-s01e08', title: 'Hostile Takeover', series: 'Supergirl', season: 1, episode: 8, airDate: '2015-12-14', year: 2015, isCrossover: false, summary: 'Supergirl enfrenta uma ameaça corporativa enquanto lida com problemas familiares.', runtime: 42, rating: 7.4 }
  ]
};

export const allSeries = [
  'Arrow', 
  'The Flash', 
  'Supergirl', 
  'Constantine', 
  'DC Legends of Tomorrow', 
  'Black Lightning', 
  'Batwoman', 
  'Superman & Lois', 
  'Stargirl', 
  'Vixen'
];

export const getSeriesFromEpisode = (episode: Episode): string => {
  return episode.series;
};

export const getAllEpisodes = (): Episode[] => {
  return Object.values(arrowverseData).flat();
};

export const getEpisodesByYear = (year: number): Episode[] => {
  return arrowverseData[year] || [];
};

export const getEpisodesBySeries = (series: string): Episode[] => {
  return getAllEpisodes().filter(episode => episode.series === series);
};

export const getCrossoverEpisodes = (): Episode[] => {
  return getAllEpisodes().filter(episode => episode.isCrossover);
};

export const getTotalEpisodes = (): number => {
  return getAllEpisodes().length;
};

export const getYears = (): number[] => {
  return Object.keys(arrowverseData).map(Number).sort();
};
