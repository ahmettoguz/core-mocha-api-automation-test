import Config from "src/config/Config";
import AuthService from "src/service/authentication/AuthService";
import CommonUtil from "src/util/CommonUtil";

const authService = new AuthService();

class AuthFacade {
  async login(data = null) {
    // prepare request
    data = data ?? {
      email: Config.admin.email,
      password: Config.admin.password,
    };

    //perform action
    const response = await authService.login(data);

    // get jwt
    const jwt = CommonUtil.extractJwtToken(response);

    return `Bearer ${jwt}`;
  }

  async validateJwt(jwt) {
    //perform action
    await authService.validateJwt(jwt);
  }
}

export default AuthFacade;
