import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export interface WatchedEpisodes {
  [episodeId: string]: boolean;
}

export interface ProgressSummary {
  totalWatched: number;
  totalEpisodes: number;
  crossoversWatched: number;
  currentStreak: number;
  lastUpdated: string;
}

export interface UserProgressData {
  watchedEpisodes: WatchedEpisodes;
  summary: ProgressSummary;
}

export function useProgress() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<UserProgressData>({
    queryKey: ['/api/progress'],
    retry: 1,
  });

  const updateEpisodeMutation = useMutation({
    mutationFn: async ({ episodeId, watched }: { episodeId: string; watched: boolean }) => {
      const response = await fetch('/api/progress/episode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ episodeId, watched }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update episode progress');
      }
      
      return response.json();
    },
    onSuccess: () => {
      // Refresh only the progress data
      queryClient.invalidateQueries({ queryKey: ['/api/progress'] });
    },
  });

  const updateSummaryMutation = useMutation({
    mutationFn: async (summary: Partial<ProgressSummary>) => {
      // Don't make an API call for summary updates - it will be calculated client-side
      return summary;
    },
    onSuccess: () => {
      // No need to invalidate queries for summary updates
    },
  });

  const resetProgressMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/progress', {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to reset progress');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/progress'] });
    },
  });

  const updateEpisodeProgress = (episodeId: string, watched: boolean) => {
    updateEpisodeMutation.mutate({ episodeId, watched });
  };

  const updateProgressSummary = (summary: Partial<ProgressSummary>) => {
    // This is now a no-op since we calculate summary client-side
  };

  const resetProgress = () => {
    resetProgressMutation.mutate();
  };

  return {
    data: data || {
      watchedEpisodes: {},
      summary: {
        totalWatched: 0,
        totalEpisodes: 0,
        crossoversWatched: 0,
        currentStreak: 0,
        lastUpdated: new Date().toISOString(),
      },
    },
    isLoading,
    error,
    updateEpisodeProgress,
    updateProgressSummary,
    resetProgress,
    isUpdating: updateEpisodeMutation.isPending || updateSummaryMutation.isPending || resetProgressMutation.isPending,
  };
}