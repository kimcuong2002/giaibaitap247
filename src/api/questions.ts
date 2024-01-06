import axiosInstance from './config';
import { QuestionType } from '@/ts/types';

const questionsURL = '/v1/questions';

const questionsApi = {
  getAllQuestions(): Promise<QuestionType[]> {
    return axiosInstance.get(`${questionsURL}`, {
      params: {
        page: 1,
        limit: 10,
      },
    });
  },

  getQuestionDetail: (_id: string, idUser: string): Promise<QuestionType> => {
    return axiosInstance.get(`${questionsURL}`, {
      params: {
        populate: idUser,
        page: 1,
        limit: 10,
      },
    });
  },
};

export default questionsApi;
