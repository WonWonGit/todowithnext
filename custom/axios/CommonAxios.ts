import axios from 'axios';
import CustomAxios from '@/custom/axios/CustomAxios';
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

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
