import axios from 'axios';
// import Cookie from 'js-cookie';
import CustomAxios from '@/custom/axios/CustomAxios';

class OfficerAxios {
  instance = () => {
    const customAxios = axios.create({
      baseURL: `${CustomAxios.baseUrl}officer/`,
    });

    // customAxios.defaults.withCredentials = true;
    // customAxios.defaults.headers.common['Authorization'] = `Bearer ${Cookie.get('jwtToken')}`;

    return customAxios;
  };
}

export default new OfficerAxios();
