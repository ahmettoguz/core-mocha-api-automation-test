import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import UserProjectFacade from "src/facade/relational/UserProjectFacade";

const helperFacade = new HelperFacade();
const userProjectFacade = new UserProjectFacade();

before(async () => {});

describe("User Project Relational Tests [user-project.spec]", function () {
  it("[POST] /api/users/{userId}/projects/{projectId}", async function () {
    // add context information
    addContext(this, "Create relation between user and project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userProjectFacade.associateUserAndProject(jwt);
  });

  it("[DELETE] /api/users/{userId}/projects/{projectId}", async function () {
    // add context information
    addContext(this, "Remove relation between user and project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userProjectFacade.unassociateUserAndProject(jwt);
  });
});
