// 액시오스 통신 결과를 store 에서 page로 전달하기 위한 DTO
export default class AxiosDTO {
  status: string;
  message: string;

  constructor(status: string, message: string) {
    this.status = status;
    this.message = message;
  }
}

// export default class AxiosDTO {
//   status: string;
//   data: any;
//
//   constructor(status: string, data: any) {
//     this.status = status;
//     this.data = data;
//   }
// }
