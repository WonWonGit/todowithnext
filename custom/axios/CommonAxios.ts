import axios from 'axios';
import CustomAxios from '@/custom/axios/CustomAxios';

class CommonAxios {
  instance = () => {
    const customAxios = axios.create({
      // baseURL: `${CustomAxios.baseUrl}common/`,
      baseURL: `${CustomAxios.baseUrl}`,
    });

    // customAxios.defaults.withCredentials = true;
    // customAxios.defaults.headers.common['Authorization'] = `Bearer ${Cookie.get('jwtToken')}`;

    return customAxios;
  };
}

export default new CommonAxios();
