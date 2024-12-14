import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import UserRoleFacade from "src/facade/relational/UserRoleFacade";

const helperFacade = new HelperFacade();
const userRoleFacade = new UserRoleFacade();

before(async () => {});

describe("User Role Relational Tests [user-role.spec]", function () {
  it("[POST] /api/users/{userId}/roles/{roleId}", async function () {
    // add context information
    addContext(this, "Create relation between user and role.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userRoleFacade.associateUserAndRole(jwt);
  });

  it("[DELETE] /api/users/{userId}/roles/{roleId}", async function () {
    // add context information
    addContext(this, "Remove relation between user and role.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userRoleFacade.unassociateUserAndRole(jwt);
  });
});
