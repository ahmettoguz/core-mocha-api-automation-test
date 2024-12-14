import Config from "src/config/Config";
import { AxiosServiceBuilder } from "src/util/AxiosService";

class AuthService {
  private prefix: string;
  constructor() {
    this.prefix = "auth";
  }

  async login(data) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefix}/login`;
    const method = "post";

    // send  request
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setData(data)
        .build();
      const response = await axiosService.request();
      return response;
    } catch (e: any) {
      throw new Error(
        `${this.constructor.name}.login:: Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }
  }

  async validateJwt(jwt) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefix}/validate`;
    const method = "post";

    // send  request
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setJwt(jwt)
        .build();
      await axiosService.request();
    } catch (e: any) {
      throw new Error(
        `${this.constructor.name}.validateJwt:: Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }
  }
}

export default AuthService;
