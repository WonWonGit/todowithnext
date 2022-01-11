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

  authHeader = (baseURL:any) => {
    const user = '';
    const isLoggedIn = '';
    const isApiUrl = baseURL.startsWith(publicRuntimeConfig.apiUrl);
    if(isLoggedIn && isApiUrl){
      return {Authorization:`Bearer`};
    }else {
      return {};
    }
  }

  handleResponse = (response:any) => {
    return response.text().then((text:any) => {
      const data = text && JSON.parse(text);

      if(!response.ok){
        if ([401, 403].includes(response.status)
            // && userService.userValue
        ) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          // userService.logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;

    });
  }
}

export default new CommonAxios();
