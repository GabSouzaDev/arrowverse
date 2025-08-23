import React, { useState, useEffect } from 'react';
import { Check, Calendar, Play, Filter, RotateCcw, Info, Loader, ChevronDown, ChevronUp } from 'lucide-react';

const ArrowverseChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [progress, setProgress] = useState(0);
  const [episodeDetails, setEpisodeDetails] = useState({});
  const [loadingEpisode, setLoadingEpisode] = useState(null);
  const [expandedEpisode, setExpandedEpisode] = useState(null);

  const arrowverseData = {
    2012: [
      'Arrow S01E01', 'Arrow S01E02', 'Arrow S01E03', 'Arrow S01E04', 'Arrow S01E05',
      'Arrow S01E06', 'Arrow S01E07', 'Arrow S01E08', 'Arrow S01E09'
    ],
    2013: [
      'Arrow S01E10', 'Arrow S01E11', 'Arrow S01E12', 'Arrow S01E13', 'Arrow S01E14',
      'Arrow S01E15', 'Arrow S01E16', 'Arrow S01E17', 'Arrow S01E18', 'Arrow S01E19',
      'Arrow S01E20', 'Arrow S01E21', 'Arrow S01E22', 'Arrow S01E23', 'Arrow S02E01',
      'Arrow S02E02', 'Arrow S02E03', 'Arrow S02E04', 'Arrow S02E05', 'Arrow S02E06',
      'Arrow S02E07', 'Arrow S02E08', 'Arrow S02E09'
    ],
    2014: [
      'Arrow S02E10', 'Arrow S02E11', 'Arrow S02E12', 'Arrow S02E13', 'Arrow S02E14',
      'Arrow S02E15', 'Arrow S02E16', 'Arrow S02E17', 'Arrow S02E18', 'Arrow S02E19',
      'Arrow S02E20', 'Arrow S02E21', 'Arrow S02E22', 'Arrow S02E23', 'The Flash S01E01',
      'Arrow S03E01', 'The Flash S01E02', 'Arrow S03E02', 'The Flash S01E03', 'Arrow S03E03',
      'Constantine S01E01', 'The Flash S01E04', 'Arrow S03E04', 'Constantine S01E02',
      'Arrow S03E05', 'Constantine S01E03', 'The Flash S01E05', 'Arrow S03E06',
      'Constantine S01E04', 'The Flash S01E06', 'Arrow S03E07', 'Constantine S01E05',
      'The Flash S01E07', 'Constantine S01E06', 'The Flash S01E08 – Crossover Arrow x Flash Parte 1',
      'Arrow S03E08 – Crossover Arrow x Flash Parte 2', 'Constantine S01E07',
      'The Flash S01E09', 'Arrow S03E09', 'Constantine S01E08'
    ],
    2015: [
      'Constantine S01E09', 'The Flash S01E10', 'Arrow S03E10', 'Constantine S01E10',
      'The Flash S01E11', 'Arrow S03E11', 'Constantine S01E11', 'The Flash S01E12',
      'Arrow S03E12', 'Constantine S01E12', 'The Flash S01E13', 'Arrow S03E13',
      'Constantine S01E13', 'The Flash S01E14', 'Arrow S03E14', 'Arrow S03E15',
      'The Flash S01E15', 'Arrow S03E16', 'The Flash S01E16', 'Arrow S03E17',
      'The Flash S01E17', 'Arrow S03E18', 'The Flash S01E18', 'Arrow S03E19',
      'The Flash S01E19', 'Arrow S03E20', 'The Flash S01E20', 'Arrow S03E21',
      'The Flash S01E21', 'Arrow S03E22', 'The Flash S01E22', 'Arrow S03E23',
      'The Flash S01E23', 'Vixen S01E01', 'Vixen S01E02', 'Vixen S01E03',
      'Vixen S01E04', 'Vixen S01E05', 'Vixen S01E06', 'The Flash S02E01',
      'Arrow S04E01', 'The Flash S02E02', 'Arrow S04E02', 'The Flash S02E03',
      'Arrow S04E03', 'Supergirl S01E01', 'The Flash S02E04', 'Arrow S04E04',
      'Supergirl S01E02', 'The Flash S02E05', 'Arrow S04E05', 'Supergirl S01E03',
      'The Flash S02E06', 'Arrow S04E06', 'Supergirl S01E04', 'The Flash S02E07',
      'Arrow S04E07', 'Supergirl S01E05', 'Supergirl S01E06',
      'The Flash S02E08 – Crossover Parte 1', 'Arrow S04E08 – Crossover Parte 2',
      'Supergirl S01E07', 'The Flash S02E09', 'Arrow S04E09', 'Supergirl S01E08'
    ],
    2016: [
      'Supergirl S01E09', 'Supergirl S01E10', 'The Flash S02E10', 'Arrow S04E10',
      'DC Legends of Tomorrow S01E01', 'Supergirl S01E11', 'The Flash S02E11',
      'Arrow S04E11', 'DC Legends of Tomorrow S01E02', 'Supergirl S01E12',
      'The Flash S02E12', 'Arrow S04E12', 'DC Legends of Tomorrow S01E03',
      'Supergirl S01E13', 'The Flash S02E13', 'Arrow S04E13', 'DC Legends of Tomorrow S01E04',
      'The Flash S02E14', 'Arrow S04E14', 'DC Legends of Tomorrow S01E05',
      'Supergirl S01E14', 'The Flash S02E15', 'Arrow S04E15', 'DC Legends of Tomorrow S01E06',
      'Supergirl S01E15', 'DC Legends of Tomorrow S01E07', 'DC Legends of Tomorrow S01E08',
      'Supergirl S01E16', 'Supergirl S01E17', 'The Flash S02E16', 'Arrow S04E16',
      'Supergirl S01E18 – Crossover com The Flash', 'The Flash S02E17', 'Arrow S04E17',
      'DC Legends of Tomorrow S01E09', 'Arrow S04E18', 'DC Legends of Tomorrow S01E10',
      'Supergirl S01E19', 'DC Legends of Tomorrow S01E11', 'Supergirl S01E20',
      'The Flash S02E18', 'DC Legends of Tomorrow S01E12', 'The Flash S02E19',
      'Arrow S04E19', 'DC Legends of Tomorrow S01E13', 'The Flash S02E20',
      'Arrow S04E20', 'DC Legends of Tomorrow S01E14', 'The Flash S02E21',
      'Arrow S04E21', 'DC Legends of Tomorrow S01E15', 'The Flash S02E22',
      'Arrow S04E22', 'DC Legends of Tomorrow S01E16', 'The Flash S02E23',
      'Arrow S04E23'
    ],
    2017: [
      'The Flash S03E01', 'Arrow S05E01', 'Supergirl S02E01',
      'The Flash S03E02', 'Arrow S05E02', 'DC Legends of Tomorrow S02E01',
      'Supergirl S02E02', 'The Flash S03E03', 'Arrow S05E03',
      'Supergirl S02E07', 'The Flash S03E07',
      'Supergirl S02E08 – Crossover Invasão Parte 1',
      'The Flash S03E08 – Crossover Invasão Parte 2',
      'Arrow S05E08 – Crossover Invasão Parte 3',
      'DC Legends of Tomorrow S02E07 – Crossover Invasão Parte 4'
    ],
    2018: [
      'Supergirl S03E10', 'The Flash S04E10', 'Black Lightning S01E01', 'Arrow S06E10',
      'The Flash S05E09 – Crossover Elseworlds Parte 1',
      'Arrow S07E09 – Crossover Elseworlds Parte 2',
      'Supergirl S04E09 – Crossover Elseworlds Parte 3'
    ],
    2019: [
      'Batwoman S01E01', 'Supergirl S05E01', 'Black Lightning S03E01', 'The Flash S06E01',
      'Supergirl S05E09 – Crossover Crise nas Infinitas Terras Parte 1',
      'Batwoman S01E09 – Crossover Crise nas Infinitas Terras Parte 2',
      'The Flash S06E09 – Crossover Crise nas Infinitas Terras Parte 3'
    ],
    2020: [
      'Arrow S08E08 – Crossover Crise nas Infinitas Terras Parte 4',
      'DC Legends of Tomorrow S05E01 – Crossover Crise nas Infinitas Terras Parte 5',
      'Stargirl S01E01', 'Stargirl S01E02', 'Stargirl S01E13'
    ],
    2021: [
      'Superman & Lois S01E01', 'The Flash S07E01',
      'The Flash S08E01 – Armageddon Parte 1',
      'The Flash S08E02 – Armageddon Parte 2',
      'The Flash S08E03 – Armageddon Parte 3'
    ],
    2022: [
      'Superman & Lois S02E01', 'The Flash S08E06', 'Stargirl S03E01'
    ],
    2023: [
      'The Flash S09E01', 'Superman & Lois S03E01', 'The Flash S09E13'
    ]
  };

  const allSeries = ['Arrow', 'The Flash', 'Supergirl', 'Constantine', 'DC Legends of Tomorrow', 'Black Lightning', 'Batwoman', 'Superman & Lois', 'Stargirl', 'Vixen'];

  const totalEpisodes = Object.values(arrowverseData).flat().length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  useEffect(() => {
    setProgress((checkedCount / totalEpisodes) * 100);
  }, [checkedItems, totalEpisodes]);

  const generateMockEpisodeData = (series, seasonEpisode, fullEpisode) => {
    const episodeTitles = {
      'Arrow': {
        'S01E01': { title: 'Pilot', summary: 'Oliver Queen returns to Starling City after being stranded on an island for five years. He becomes the vigilante known as the Hood to fight corruption and crime in his city.' },
        'S01E02': { title: 'Honor Thy Father', summary: 'Oliver continues his mission to clean up the city by targeting corrupt businessman Adam Hunt. Meanwhile, he tries to reconnect with his family.' },
      },
      'The Flash': {
        'S01E01': { title: 'Pilot', summary: 'Barry Allen awakens from a coma after being struck by lightning during the particle accelerator explosion. He discovers he has super speed and begins his journey as The Flash.' },
        'S07E01': { title: 'All\'s Wells That Ends Wells', summary: 'After months of searching for Iris, Barry must decide whether to continue looking for her or move on.' }
      },
      'Supergirl': {
        'S01E01': { title: 'Pilot', summary: 'Kara Danvers embraces her powers and becomes Supergirl when she must save her adoptive sister Alex and a plane full of passengers.' }
      }
    };

    if (episodeTitles[series] && episodeTitles[series][seasonEpisode]) {
      return episodeTitles[series][seasonEpisode];
    }

    const season = seasonEpisode ? seasonEpisode.split('E')[0].replace('S', '') : '1';
    const episodeNum = seasonEpisode ? seasonEpisode.split('E')[1] : '1';
    
    if (fullEpisode.includes('Crossover') || fullEpisode.includes('–')) {
      return {
        title: `${series} - Crossover Event`,
        summary: `Este é um episódio especial de crossover que conecta múltiplas séries do Arrowverse. Os heróis se unem para enfrentar uma ameaça que é grande demais para qualquer um deles enfrentar sozinho.`
      };
    }

    return {
      title: `${series} - Season ${season}, Episode ${episodeNum}`,
      summary: `Episódio da temporada ${season} de ${series}. Para obter informações detalhadas sobre este episódio, consulte fontes oficiais como IMDb, TVDB ou sites especializados em séries.`
    };
  };

  const fetchEpisodeDetails = async (episode) => {
    setLoadingEpisode(episode);
    
    try {
      const parts = episode.split(' ');
      const series = parts[0] === 'DC' ? 'DC Legends of Tomorrow' :
                   parts[0] === 'Superman' ? 'Superman & Lois' :
                   parts[0] === 'Black' ? 'Black Lightning' :
                   parts[0];
      
      const seasonEpisode = parts.find(part => part.includes('S') && part.includes('E'));
      
      const mockData = generateMockEpisodeData(series, seasonEpisode, episode);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setEpisodeDetails(prev => ({
        ...prev,
        [episode]: mockData
      }));
      
    } catch (error) {
      setEpisodeDetails(prev => ({
        ...prev,
        [episode]: {
          title: 'Erro ao carregar',
          summary: 'Não foi possível carregar as informações deste episódio.',
          error: true
        }
      }));
    } finally {
      setLoadingEpisode(null);
    }
  };

  const handleCheck = (episode) => {
    setCheckedItems(prev => ({
      ...prev,
      [episode]: !prev[episode]
    }));
  };

  const handleEpisodeClick = (episode) => {
    if (expandedEpisode === episode) {
      setExpandedEpisode(null);
    } else {
      setExpandedEpisode(episode);
      if (!episodeDetails[episode] && !loadingEpisode) {
        fetchEpisodeDetails(episode);
      }
    }
  };

  const resetProgress = () => {
    setCheckedItems({});
    setEpisodeDetails({});
    setExpandedEpisode(null);
  };

  const getSeriesFromEpisode = (episode) => {
    if (episode.includes('Superman & Lois')) return 'Superman & Lois';
    if (episode.includes('DC Legends')) return 'DC Legends of Tomorrow';
    if (episode.includes('Black Lightning')) return 'Black Lightning';
    return episode.split(' ')[0];
  };

  const filteredData = () => {
    let filtered = { ...arrowverseData };

    if (selectedYear !== 'all') {
      filtered = { [selectedYear]: arrowverseData[selectedYear] };
    }

    if (selectedSeries !== 'all') {
      Object.keys(filtered).forEach(year => {
        filtered[year] = filtered[year].filter(episode => 
          getSeriesFromEpisode(episode) === selectedSeries
        );
      });
    }

    return filtered;
  };

  const isCrossover = (episode) => {
    return episode.toLowerCase().includes('crossover') || 
           episode.includes('–') && (
             episode.includes('Parte') || 
             episode.includes('Invasão') || 
             episode.includes('Crise') || 
             episode.includes('Elseworlds') || 
             episode.includes('Armageddon')
           );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Play className="text-blue-600" />
            Checklist do Arrowverse
          </h1>
          <p className="text-gray-600">Ordem cronológica oficial baseada na exibição da CW</p>
          <p className="text-sm text-gray-500 mt-2">💡 Clique em qualquer episódio para ver detalhes</p>
        </div>

        <div className="mb-8 bg-gray-200 rounded-full h-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-700">
            {checkedCount} de {totalEpisodes} episódios assistidos ({Math.round(progress)}%)
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="text-gray-600" size={20} />
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="all">Todos os anos</option>
              {Object.keys(arrowverseData).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="text-gray-600" size={20} />
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
            >
              <option value="all">Todas as séries</option>
              {allSeries.map(series => (
                <option key={series} value={series}>{series}</option>
              ))}
            </select>
          </div>

          <button
            onClick={resetProgress}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
            Resetar
          </button>
        </div>

        <div className="space-y-8">
          {Object.entries(filteredData()).map(([year, episodes]) => (
            episodes.length > 0 && (
              <div key={year} className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Calendar className="text-blue-600" />
                  {year}
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    ({episodes.filter(ep => checkedItems[ep]).length}/{episodes.length} assistidos)
                  </span>
                </h2>
                
                <div className="space-y-3">
                  {episodes.map((episode, index) => (
                    <div key={`${year}-${index}`} className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
                      <div
                        className={`flex items-center gap-3 p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                          checkedItems[episode] 
                            ? 'bg-green-50 border-green-300 text-green-800' 
                            : isCrossover(episode)
                            ? 'bg-yellow-50 border-yellow-300 text-yellow-800 hover:bg-yellow-100'
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleEpisodeClick(episode)}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            checkedItems[episode] 
                              ? 'bg-green-500 border-green-500' 
                              : 'border-gray-300'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheck(episode);
                          }}
                        >
                          {checkedItems[episode] && <Check className="text-white" size={16} />}
                        </div>
                        
                        <span className={`flex-1 font-medium ${
                          isCrossover(episode) ? 'font-bold' : ''
                        }`}>
                          {episode}
                        </span>
                        
                        <div className="flex gap-2">
                          {isCrossover(episode) && (
                            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                              CROSSOVER
                            </span>
                          )}
                          
                          <div className="flex items-center gap-1 text-blue-600">
                            <Info size={16} />
                            {expandedEpisode === episode ? (
                              <ChevronUp size={16} />
                            ) : (
                              <ChevronDown size={16} />
                            )}
                          </div>
                        </div>
                      </div>

                      {expandedEpisode === episode && (
                        <div className="border-t-2 border-gray-100 p-4 bg-gray-50">
                          {loadingEpisode === episode ? (
                            <div className="flex items-center gap-3 text-gray-600">
                              <Loader className="animate-spin" size={20} />
                              <span>Carregando informações do episódio...</span>
                            </div>
                          ) : episodeDetails[episode] ? (
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-bold text-gray-800 mb-1">
                                  {episodeDetails[episode].title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                  {episodeDetails[episode].summary}
                                </p>
                              </div>
                              
                              {episodeDetails[episode].error && (
                                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg">
                                  <Info size={16} />
                                  <span className="text-sm">
                                    Para informações detalhadas, consulte IMDb, TVDB ou sites especializados.
                                  </span>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-gray-600">
                              <p>Clique novamente para carregar as informações deste episódio.</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <strong>Como usar:</strong> Clique no episódio para ver título e resumo. 
            Clique no círculo ⭕ para marcar como assistido. 
            Os crossovers estão destacados em amarelo! 🎬
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrowverseChecklist;