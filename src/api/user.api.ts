import axiosInstance from './config';
import { UserType } from '@/ts/types';

const useUrl =
  'https://p31giaibaitaptest.izisoft.io/v1/users/654d872672ac8416b62abadc';

const userApi = {
  getUser: (): Promise<UserType> => axiosInstance.get(useUrl),
};

export default userApi;
