import { createQueryKeys } from '@lukemorales/query-key-factory';
import {
  QueryOptions,
  UseQueryResult,
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';

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

export const useCreateSubjectMutation = () => {
  return useMutation({
    mutationFn: subjectApi.create,
    onSuccess: () => {
      void toast.success('Create new subject successfully!');
    },
    onError: () => {
      void toast.error('Create new subject failed!');
    },
  });
};

export const useUpdateSubjectMutation = () => {
  return useMutation({
    mutationFn: subjectApi.update,
    onSuccess: () => {
      void toast.success('Update subject successfully!');
    },
    onError: () => {
      void toast.error('Update subject failed!');
    },
  });
};

export const useDeleteSubjectMutation = () => {
  return useMutation({
    mutationFn: subjectApi.delete,
    onSuccess: () => {
      void toast.success('Delete subject successfully!');
    },
    onError: () => {
      void toast.error('Delete subject failed!');
    },
  });
};
