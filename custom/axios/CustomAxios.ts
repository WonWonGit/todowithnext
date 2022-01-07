import axios from 'axios';

class CustomAxios {
  //TODO: url 체크

  baseUrl = 'http://localhost:3001/';
  // baseUrl = 'http://192.168.0.69:8070/LawshopAdmin/';
  // baseUrl = 'http://218.235.89.55:8070/LawshopAdmin/'; // 테스트
  // baseUrl = 'http://54.180.7.193:8070/LawshopAdmin/'; // 실서버

  instance = () => {
    const customAxios = axios.create({
      baseURL: this.baseUrl,
    });

    // customAxios.defaults.withCredentials = true;
    // customAxios.defaults.headers.common['Authorization'] = `Bearer ${Cookie.get('jwtToken')}`;

    return customAxios;
  };
}

export default new CustomAxios();
