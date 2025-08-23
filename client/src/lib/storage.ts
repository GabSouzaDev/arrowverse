export interface WatchedEpisodes {
  [episodeId: string]: boolean;
}

export interface UserProgress {
  watchedEpisodes: WatchedEpisodes;
  lastUpdated: string;
  totalWatched: number;
  totalEpisodes: number;
  crossoversWatched: number;
  currentStreak: number;
}

const STORAGE_KEY = 'arrowverse-progress';

export const loadProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading progress from localStorage:', error);
  }
  
  return {
    watchedEpisodes: {},
    lastUpdated: new Date().toISOString(),
    totalWatched: 0,
    totalEpisodes: 0,
    crossoversWatched: 0,
    currentStreak: 0
  };
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...progress,
      lastUpdated: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
  }
};

export const exportProgress = (format: 'json' | 'csv'): string => {
  const progress = loadProgress();
  
  if (format === 'json') {
    return JSON.stringify(progress, null, 2);
  }
  
  if (format === 'csv') {
    const header = 'Episode ID,Watched,Date Updated\n';
    const rows = Object.entries(progress.watchedEpisodes)
      .map(([episodeId, watched]) => `${episodeId},${watched},${progress.lastUpdated}`)
      .join('\n');
    return header + rows;
  }
  
  return '';
};

export const downloadFile = (content: string, filename: string, mimeType: string): void => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
