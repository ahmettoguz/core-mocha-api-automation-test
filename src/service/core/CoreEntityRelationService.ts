import Config from "src/config/Config";
import { AxiosServiceBuilder } from "src/util/AxiosService";

abstract class CoreEntityRelationService {
  private prefixEntity1: string;
  private prefixEntity2: string;

  constructor(prefixEntity1: string, prefixEntity2: string) {
    this.prefixEntity1 = prefixEntity1;
    this.prefixEntity2 = prefixEntity2;
  }

  async associate(jwt, firstEntityId, secondEntityId) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefixEntity1}/${firstEntityId}/${this.prefixEntity2}/${secondEntityId}`;
    const method = "post";

    // send request
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setJwt(jwt)
        .build();
      await axiosService.request();
    } catch (e: any) {
      throw new Error(
        `Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }
  }

  async unassociate(jwt, firstEntityId, secondEntityId) {
    // prepare request
    const url = `${Config.baseUrl}/api/users/${firstEntityId}/${this.prefixEntity2}/${secondEntityId}`;
    const method = "delete";

    // send request
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setJwt(jwt)
        .build();
      await axiosService.request();
    } catch (e: any) {
      throw new Error(
        `Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }
  }
}

export default CoreEntityRelationService;
