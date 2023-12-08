import { createQueryKeys } from '@lukemorales/query-key-factory';
import { QueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';

import subjectApi from '../../api/subject.api';
import { ResponseDatas, SubjectType } from '../../interface/subject-type';

const subjects = createQueryKeys('subjects', {
  getSubjects: () => ({
    queryKey: ['subjects'],
    queryFn: () => subjectApi.getSubjects(),
  }),
  getDetail: (_id: string) => ({
    queryKey: [_id],
    queryFn: () => subjectApi.getDetail(_id),
  }),
});

export const useSubjectQuery = <T = ResponseDatas>(
  options: QueryOptions<T, ResponseDatas> = {},
) => {
  return useQuery({
    ...subjects.getSubjects(),
    keepPreviousData: true,
    ...options,
  });
};

export const useSubjectDetail = (
  _id: string,
): UseQueryResult<SubjectType, unknown> => {
  return useQuery({
    ...subjects.getDetail(_id),
  });
};
