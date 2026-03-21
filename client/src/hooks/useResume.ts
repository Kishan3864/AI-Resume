import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const useResume = () => {
  const { resumes, currentResume, isLoading, error } = useSelector(
    (state: RootState) => state.resume,
  );

  return {
    resumes,
    currentResume,
    isLoading,
    error,
  };
};
