import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import UserIssueFacade from "src/facade/relational/UserIssueFacade";

const helperFacade = new HelperFacade();
const userIssueFacade = new UserIssueFacade();

before(async () => {});

describe("User Issue Relational Tests [user-issue.spec]", function () {
  it("[POST] /api/users/{userId}/issues/{issueId}", async function () {
    // add context information
    addContext(this, "Create relation between user and issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userIssueFacade.associateUserAndIssue(jwt);
  });

  it("[DELETE] /api/users/{userId}/issues/{issueId}", async function () {
    // add context information
    addContext(this, "Remove relation between user and issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userIssueFacade.unassociateUserAndIssue(jwt);
  });
});
