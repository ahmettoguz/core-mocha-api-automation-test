import Config from "src/config/Config";
import AuthFacade from "./authentication/AuthFacade";

const authFacade = new AuthFacade();

class HelperFacade {
  async getAdminJwt() {
    // prepare request
    const data = {
      email: Config.admin.email,
      password: Config.admin.password,
    };

    // preform operation
    const jwt = await authFacade.login(data);

    return jwt;
  }
}

export default HelperFacade;
