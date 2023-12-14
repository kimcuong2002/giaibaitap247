import axiosInstance from './config';
import { ResponseDatas, SubjectType } from '../interface/subject-type';

const subjectURL = '/v1/subjects';
const subjectApi = {
  getSubjects: (): Promise<ResponseDatas> => axiosInstance.get(`${subjectURL}`),

  getDetail: (_id: string): Promise<SubjectType> =>
    axiosInstance.get(`${subjectURL}/${_id}`),

  create: (body: SubjectType): Promise<SubjectType> =>
    axiosInstance.post(`${subjectURL}`, body),

  update: (body: SubjectType): Promise<SubjectType> =>
    axiosInstance.patch(`${subjectURL}`, body),

  delete: (_id: string): Promise<{ message: string }> =>
    axiosInstance.delete(`${subjectURL}/${_id}`),
};

export default subjectApi;
