import axiosInstance from './config';
import { UserType } from '@/ts/types';

const useUrl =
  'https://p31giaibaitaptest.izisoft.io/v1/users/641c3375d64ef9ba4d3067c4';

const userApi = {
  getUser: (): Promise<UserType> => axiosInstance.get(useUrl),
};

export default userApi;
