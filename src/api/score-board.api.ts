import axiosInstance from './config';
import { ScoreBoard } from '@/ts/types';

const scoreURL =
  '/v1/score-boards/paginate?populate=idUser&fields=idUser.avatar&sort=-score';

const scoreBoardApi = {
  getScoreBoard: (): Promise<ScoreBoard> => axiosInstance.get(`${scoreURL}`),
};

export default scoreBoardApi;
