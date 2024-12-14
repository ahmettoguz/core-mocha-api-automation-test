import Config from "src/config/Config";
import { AxiosServiceBuilder } from "src/util/AxiosService";
import CommonUtil from "src/util/CommonUtil";
import CoreEntityService from "./core/CoreEntityService";

class UserService extends CoreEntityService {
  constructor() {
    super("users");
  }

  async getDefaultCreateData() {
    return {
      firstName: `${Config.preKey}${CommonUtil.generateRandomWord()}`,
      email: `${Config.preKey}${CommonUtil.generateRandomWord()}@hotmail.com`,
      password: `${Config.preKey}${CommonUtil.generateRandomWord()}`,
      isActive: true,
    };
  }

  async create(jwt = null, data = null) {
    // prepare request
    data = data ?? (await this.getDefaultCreateData());

    // delegate to parent
    const instanceToCreate = await super.create(jwt, data);

    // set password
    instanceToCreate.password = data.password;

    return instanceToCreate;
  }

  async searchByExactName(jwt, searchString) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefix}/search/exact`;
    const method = "get";
    const data = {
      pageNumber: 0,
      pageSize: 5,
      isDescending: true,
      firstName: searchString,
    };

    // read paged and sorted
    let readInstances;
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setData(data)
        .setJwt(jwt)
        .build();
      const response = await axiosService.request();
      readInstances = response.data.data;
    } catch (e: any) {
      throw new Error(
        `${this.constructor.name}.searchByExactName:: Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }

    return readInstances;
  }

  async searchByPartialName(jwt, searchString) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefix}/search/partial`;
    const method = "get";
    const data = {
      pageNumber: 0,
      pageSize: 5,
      isDescending: true,
      firstName: searchString,
    };

    // read paged and sorted
    let readInstances;
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setData(data)
        .setJwt(jwt)
        .build();
      const response = await axiosService.request();
      readInstances = response.data.data;
    } catch (e: any) {
      throw new Error(
        `${this.constructor.name}.searchByPartialName:: Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }

    return readInstances;
  }

  async updateUserPassword(jwt, instanceId, data) {
    // prepare request
    const url = `${Config.baseUrl}/api/${this.prefix}/${instanceId}/password`;
    const method = "patch";

    // update instance
    let operationStatus;
    try {
      const axiosService = new AxiosServiceBuilder()
        .setUrl(url)
        .setMethod(method)
        .setData(data)
        .setJwt(jwt)
        .build();
      const response = await axiosService.request();
      operationStatus = response.data;
    } catch (e: any) {
      throw new Error(
        `${this.constructor.name}.updateUserPassword:: Axios error: ${JSON.stringify(e.response.data, null, 2)}`
      );
    }

    return operationStatus;
  }
}

export default UserService;
