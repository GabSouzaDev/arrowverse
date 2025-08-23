import React, { useState, useEffect } from 'react';
import { Check, Play, Filter, RotateCcw, Info, Loader, ChevronDown, ChevronUp, Search, Target, Download, RefreshCw, ArrowUp, Calendar, Zap, Eye, EyeOff, X, CheckSquare, Square, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  arrowverseData, 
  allSeries, 
  getAllEpisodes, 
  getEpisodesByYear, 
  getEpisodesBySeries, 
  getCrossoverEpisodes,
  getTotalEpisodes,
  getYears,
  type Episode 
} from '@/lib/arrowverse-data';
import { 
  exportProgress, 
  downloadFile
} from '@/lib/storage';
import { useProgress } from '@/hooks/useProgress';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedEpisode, setExpandedEpisode] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [loadingEpisode, setLoadingEpisode] = useState<string | null>(null);
  const [quickFilter, setQuickFilter] = useState<string>('all');
  const { toast } = useToast();
  
  const { 
    data: progress, 
    isLoading: progressLoading, 
    updateEpisodeProgress, 
    resetProgress: resetProgressAPI,
    isUpdating 
  } = useProgress();
  
  const checkedItems = progress.watchedEpisodes;

  // Calculate progress values in real-time
  const calculateCurrentProgress = () => {
    if (!progress.watchedEpisodes) {
      return {
        totalWatched: 0,
        totalEpisodes: getTotalEpisodes(),
        crossoversWatched: 0,
        currentStreak: 0
      };
    }
    
    const allEpisodes = getAllEpisodes();
    const crossoverEpisodes = getCrossoverEpisodes();
    
    const totalWatched = Object.values(progress.watchedEpisodes).filter(Boolean).length;
    const crossoversWatched = crossoverEpisodes.filter(ep => progress.watchedEpisodes[ep.id]).length;
    
    return {
      totalWatched,
      totalEpisodes: allEpisodes.length,
      crossoversWatched,
      currentStreak: progress.summary?.currentStreak || 0
    };
  };
  
  const currentProgress = calculateCurrentProgress();

  const handleCheck = (episodeId: string) => {
    const currentState = progress.watchedEpisodes[episodeId] || false;
    updateEpisodeProgress(episodeId, !currentState);
  };

  const handleYearCheck = (year: string, episodes: Episode[]) => {
    const episodesInYear = episodes;
    const watchedInYear = episodesInYear.filter(ep => progress.watchedEpisodes[ep.id]).length;
    const allWatched = watchedInYear === episodesInYear.length;
    
    // If all episodes are watched, uncheck all; otherwise, check all
    const shouldWatch = !allWatched;
    
    episodesInYear.forEach(episode => {
      updateEpisodeProgress(episode.id, shouldWatch);
    });
  };

  const getYearCheckStatus = (episodes: Episode[]) => {
    const watchedCount = episodes.filter(ep => progress.watchedEpisodes[ep.id]).length;
    const totalCount = episodes.length;
    
    if (watchedCount === 0) return 'none';
    if (watchedCount === totalCount) return 'all';
    return 'partial';
  };

  const handleEpisodeClick = (episode: Episode) => {
    if (expandedEpisode === episode.id) {
      setExpandedEpisode(null);
    } else {
      setExpandedEpisode(episode.id);
      if (!episode.summary) {
        setLoadingEpisode(episode.id);
        // Simulate loading episode details
        setTimeout(() => {
          setLoadingEpisode(null);
        }, 1500);
      }
    }
  };

  const resetProgress = () => {
    resetProgressAPI();
    setExpandedEpisode(null);
    toast({
      title: "Progresso resetado",
      description: "Todo o progresso foi limpo com sucesso.",
    });
  };

  const exportData = (format: 'json' | 'csv') => {
    // Create a mock localStorage-style object for compatibility with exportProgress
    const mockProgress = {
      watchedEpisodes: progress.watchedEpisodes,
      lastUpdated: progress.summary.lastUpdated,
      totalWatched: progress.summary.totalWatched,
      totalEpisodes: progress.summary.totalEpisodes,
      crossoversWatched: progress.summary.crossoversWatched,
      currentStreak: progress.summary.currentStreak
    };
    
    // Temporarily save to localStorage for export function
    const tempKey = 'temp-arrowverse-progress';
    localStorage.setItem(tempKey, JSON.stringify(mockProgress));
    
    try {
      const content = exportProgress(format);
      const filename = `arrowverse-progress-${new Date().toISOString().split('T')[0]}.${format}`;
      const mimeType = format === 'json' ? 'application/json' : 'text/csv';
      
      downloadFile(content, filename, mimeType);
      setShowExportModal(false);
      
      toast({
        title: "Exportação concluída",
        description: `Progresso exportado como ${format.toUpperCase()}.`,
      });
    } finally {
      // Clean up temporary localStorage entry
      localStorage.removeItem(tempKey);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFilteredEpisodes = () => {
    let episodes = getAllEpisodes();

    // Filter by year
    if (selectedYear !== 'all') {
      episodes = getEpisodesByYear(parseInt(selectedYear));
    }

    // Filter by series
    if (selectedSeries !== 'all') {
      episodes = episodes.filter(ep => ep.series === selectedSeries);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      episodes = episodes.filter(ep => 
        ep.title.toLowerCase().includes(query) ||
        ep.series.toLowerCase().includes(query) ||
        `s${ep.season.toString().padStart(2, '0')}e${ep.episode.toString().padStart(2, '0')}`.includes(query)
      );
    }

    // Apply quick filters
    if (quickFilter === 'crossovers') {
      episodes = episodes.filter(ep => ep.isCrossover);
    } else if (quickFilter === 'watched') {
      episodes = episodes.filter(ep => progress.watchedEpisodes[ep.id]);
    } else if (quickFilter === 'unwatched') {
      episodes = episodes.filter(ep => !progress.watchedEpisodes[ep.id]);
    }

    return episodes;
  };

  const groupEpisodesByYear = (episodes: Episode[]) => {
    const grouped: Record<number, Episode[]> = {};
    episodes.forEach(episode => {
      if (!grouped[episode.year]) {
        grouped[episode.year] = [];
      }
      grouped[episode.year].push(episode);
    });
    return grouped;
  };

  const filteredEpisodes = getFilteredEpisodes();
  const groupedEpisodes = groupEpisodesByYear(filteredEpisodes);
  const progressPercentage = currentProgress.totalEpisodes > 0 ? (currentProgress.totalWatched / currentProgress.totalEpisodes) * 100 : 0;
  
  if (progressLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 font-['Inter'] flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin w-8 h-8 mx-auto mb-4" />
          <p className="text-gray-600">Carregando seu progresso...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 font-['Inter']">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Arrowverse Checklist</h1>
                <p className="text-xs text-gray-500">Ordem cronológica oficial</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center space-x-2"
                onClick={() => setShowExportModal(true)}
                data-testid="button-export"
              >
                <Download className="w-4 h-4" />
                <span>Exportar</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={resetProgress}
                data-testid="button-reset"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Reset</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Section */}
        <Card className="mb-8 shadow-xl border-gray-100">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center mb-6">
              <Badge className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 mb-4">
                <Target className="w-4 h-4" />
                <span>Progresso Geral</span>
              </Badge>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-600" data-testid="text-watched">{currentProgress.totalWatched}</div>
                  <div className="text-sm text-gray-600">Assistidos</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-600" data-testid="text-total">{currentProgress.totalEpisodes}</div>
                  <div className="text-sm text-gray-600">Total</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600" data-testid="text-percentage">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-gray-600">Completo</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600" data-testid="text-crossovers">{currentProgress.crossoversWatched}</div>
                  <div className="text-sm text-gray-600">Crossovers</div>
                </div>
              </div>
            </div>
            
            <Progress value={progressPercentage} className="mb-4 h-4" data-testid="progress-bar" />
            
            <p className="text-center text-gray-600 text-sm">
              <span data-testid="text-streak">{currentProgress.currentStreak} episódios</span> assistidos esta semana
              {isUpdating && <span className="ml-2 text-blue-600">• Sincronizando...</span>}
            </p>
          </CardContent>
        </Card>

        {/* Filter Controls */}
        <Card className="mb-8 shadow-lg border-gray-100">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar episódio</label>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Digite o nome da série ou episódio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ano</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger data-testid="select-year">
                    <SelectValue placeholder="Todos os anos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os anos</SelectItem>
                    {getYears().map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Series Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Série</label>
                <Select value={selectedSeries} onValueChange={setSelectedSeries}>
                  <SelectTrigger data-testid="select-series">
                    <SelectValue placeholder="Todas as séries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as séries</SelectItem>
                    {allSeries.map(series => (
                      <SelectItem key={series} value={series}>{series}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Quick Filters */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={quickFilter === 'crossovers' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setQuickFilter(quickFilter === 'crossovers' ? 'all' : 'crossovers')}
                  className="text-sm"
                  data-testid="button-filter-crossovers"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Apenas Crossovers
                </Button>
                <Button
                  variant={quickFilter === 'unwatched' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setQuickFilter(quickFilter === 'unwatched' ? 'all' : 'unwatched')}
                  className="text-sm"
                  data-testid="button-filter-unwatched"
                >
                  <EyeOff className="w-3 h-3 mr-1" />
                  Não assistidos
                </Button>
                <Button
                  variant={quickFilter === 'watched' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setQuickFilter(quickFilter === 'watched' ? 'all' : 'watched')}
                  className="text-sm"
                  data-testid="button-filter-watched"
                >
                  <Check className="w-3 h-3 mr-1" />
                  Assistidos
                </Button>
                {quickFilter !== 'all' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuickFilter('all')}
                    className="text-sm"
                    data-testid="button-clear-filters"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Limpar filtros
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Episode List */}
        <div className="space-y-6">
          {Object.entries(groupedEpisodes).map(([year, episodes]) => (
            <div key={year} className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleYearCheck(year, episodes)}
                    className="flex items-center justify-center w-6 h-6 rounded border-2 border-gray-300 hover:border-blue-500 transition-colors"
                    data-testid={`button-year-${year}-check`}
                    title={`Marcar/desmarcar todos os episódios de ${year}`}
                  >
                    {(() => {
                      const status = getYearCheckStatus(episodes);
                      if (status === 'all') {
                        return <CheckSquare className="w-4 h-4 text-green-600" />;
                      } else if (status === 'partial') {
                        return <Minus className="w-4 h-4 text-yellow-600" />;
                      } else {
                        return <Square className="w-4 h-4 text-gray-400" />;
                      }
                    })()}
                  </button>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 font-semibold">
                    {year}
                  </Badge>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                <div className="text-sm text-gray-500">
                  <span data-testid={`text-year-${year}-watched`}>
                    {episodes.filter(ep => progress.watchedEpisodes[ep.id]).length}
                  </span> de <span data-testid={`text-year-${year}-total`}>
                    {episodes.length}
                  </span> episódios
                </div>
              </div>

              <div className="grid gap-4">
                {episodes.map((episode) => (
                  <Card 
                    key={episode.id} 
                    className={`shadow-lg border transition-all duration-300 hover:shadow-xl overflow-hidden ${
                      progress.watchedEpisodes[episode.id] 
                        ? episode.isCrossover 
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-green-400/20'
                          : 'bg-gradient-to-r from-green-50 to-green-100 border-green-200 shadow-green-400/20'
                        : episode.isCrossover 
                          ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-yellow-300 shadow-yellow-400/20' 
                          : 'bg-white border-gray-100'
                    }`}
                    data-testid={`card-episode-${episode.id}`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* Checkbox */}
                          <div className="relative">
                            <input
                              type="checkbox"
                              className={`w-5 h-5 border-2 rounded focus:ring-2 cursor-pointer ${
                                episode.isCrossover 
                                  ? 'text-yellow-600 border-yellow-600 focus:ring-yellow-600' 
                                  : 'text-green-600 border-gray-300 focus:ring-green-600'
                              }`}
                              checked={progress.watchedEpisodes[episode.id] || false}
                              disabled={isUpdating}
                              onChange={() => handleCheck(episode.id)}
                              data-testid={`checkbox-episode-${episode.id}`}
                            />
                          </div>
                          
                          {/* Episode Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge 
                                className={`text-xs font-medium ${
                                  episode.series === 'Arrow' ? 'bg-green-100 text-green-800' :
                                  episode.series === 'The Flash' ? 'bg-red-100 text-red-800' :
                                  episode.series === 'Supergirl' ? 'bg-blue-100 text-blue-800' :
                                  episode.series === 'Constantine' ? 'bg-purple-100 text-purple-800' :
                                  episode.series === 'Vixen' ? 'bg-orange-100 text-orange-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {episode.series}
                              </Badge>
                              {episode.isCrossover && (
                                <Badge className="bg-yellow-200 text-yellow-800 text-xs font-bold">
                                  <Zap className="w-3 h-3 mr-1" />
                                  CROSSOVER
                                </Badge>
                              )}
                              <span className="text-sm text-gray-500" data-testid={`text-episode-code-${episode.id}`}>
                                S{episode.season.toString().padStart(2, '0')}E{episode.episode.toString().padStart(2, '0')}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 truncate" data-testid={`text-episode-title-${episode.id}`}>
                              {episode.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1" data-testid={`text-episode-date-${episode.id}`}>
                              {new Date(episode.airDate).toLocaleDateString('pt-BR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleEpisodeClick(episode)}
                            data-testid={`button-expand-${episode.id}`}
                          >
                            <Info className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleEpisodeClick(episode)}
                            data-testid={`button-toggle-${episode.id}`}
                          >
                            {expandedEpisode === episode.id ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Episode Details (Expandable) */}
                      {expandedEpisode === episode.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100" data-testid={`details-episode-${episode.id}`}>
                          {loadingEpisode === episode.id ? (
                            <div className="flex items-center gap-3 text-gray-600">
                              <Loader className="animate-spin" size={20} />
                              <span>Carregando informações do episódio...</span>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div className="prose prose-sm max-w-none">
                                <p className="text-gray-700" data-testid={`text-episode-summary-${episode.id}`}>
                                  {episode.summary || 'Informações detalhadas deste episódio não estão disponíveis no momento.'}
                                </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>⏱️ {episode.runtime || 42} min</span>
                                  <span>📺 The CW</span>
                                  <span>⭐ {episode.rating || 'N/A'}/10</span>
                                </div>
                                <Button 
                                  variant="link" 
                                  size="sm"
                                  className="text-blue-600 hover:text-purple-600"
                                  data-testid={`button-imdb-${episode.id}`}
                                >
                                  Ver no IMDb →
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEpisodes.length === 0 && (
          <Card className="shadow-lg border-gray-100">
            <CardContent className="p-8 text-center">
              <div className="text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Nenhum episódio encontrado</h3>
                <p className="text-sm">Tente ajustar seus filtros ou termo de busca.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Floating Actions */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="flex flex-col space-y-3">
            <Button
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-green-600 hover:bg-green-700"
              onClick={() => setShowExportModal(true)}
              title="Exportar progresso"
              data-testid="button-export-floating"
            >
              <Download className="w-5 h-5" />
            </Button>
            
            <Button
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-purple-600 hover:bg-purple-700"
              onClick={() => window.location.reload()}
              title="Sincronizar dados"
              data-testid="button-sync"
            >
              <RefreshCw className="w-5 h-5" />
            </Button>
            
            <Button
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-blue-600 hover:bg-blue-700"
              onClick={scrollToTop}
              title="Voltar ao topo"
              data-testid="button-scroll-top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent className="max-w-md" data-testid="modal-export">
          <DialogHeader>
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-center">Exportar Progresso</DialogTitle>
            <DialogDescription className="text-center">
              Escolha o formato para exportar seu progresso
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full p-4 h-auto text-left"
              onClick={() => exportData('json')}
              data-testid="button-export-json"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  📄
                </div>
                <div>
                  <div className="font-medium">JSON</div>
                  <div className="text-sm text-gray-500">Dados estruturados para backup</div>
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="w-full p-4 h-auto text-left"
              onClick={() => exportData('csv')}
              data-testid="button-export-csv"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  📊
                </div>
                <div>
                  <div className="font-medium">CSV</div>
                  <div className="text-sm text-gray-500">Planilha para análise</div>
                </div>
              </div>
            </Button>
          </div>

          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setShowExportModal(false)}
              data-testid="button-cancel-export"
            >
              Cancelar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
