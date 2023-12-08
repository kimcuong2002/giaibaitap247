import axiosInstance from './config';
import { ResponseDatas, SubjectType } from '../interface/subject-type';
import { getSubjectDetail } from '../utils';

const subjectURL = String(import.meta.env.VITE_API_SUBJECT);

const subjectApi = {
  getSubjects: (): Promise<ResponseDatas> => axiosInstance.get(subjectURL),
  getDetail: (_id: string): Promise<SubjectType> =>
    axiosInstance.get(getSubjectDetail(_id)),
};

export default subjectApi;
