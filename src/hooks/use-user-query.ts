import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import userApi from '@/api/user.api';

const user = createQueryKeys('user', {
  getUser: () => ({
    queryKey: ['user'],
    queryFn: () => userApi.getUser(),
  }),
});

export const useUserQuery = () => {
  return useQuery({
    ...user.getUser(),
  });
};
