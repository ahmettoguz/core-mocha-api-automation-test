import addContext from "mochawesome/addContext";
import AuthFacade from "src/facade/authentication/AuthFacade";
import HelperFacade from "src/facade/HelperFacade";

const helperFacade = new HelperFacade();
const authFacade = new AuthFacade();

before(async () => {});

describe("Authentication Operation Tests [auth.spec]", function () {
  it("[POST] /api/auth/login", async function () {
    // add context information
    addContext(this, "Checking login operation.");

    // perform operation
    await authFacade.login();
  });

  it("[POST] /api/auth/validate", async function () {
    // add context information
    addContext(this, "Validating jwt token.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await authFacade.validateJwt(jwt);
  });
});
