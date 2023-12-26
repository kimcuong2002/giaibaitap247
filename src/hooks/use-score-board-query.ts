import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import scoreBoardApi from '@/api/score-board.api';

const scoreBoard = createQueryKeys('scoreBoard', {
  getScoreBoard: () => ({
    queryKey: ['scoreBoard'],
    queryFn: () => scoreBoardApi.getScoreBoard(),
  }),
});

export const useScoreBoardQuery = () => {
  return useQuery({
    ...scoreBoard.getScoreBoard(),
  });
};
