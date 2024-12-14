import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import UserDomainFacade from "src/facade/relational/UserDomainFacade";

const helperFacade = new HelperFacade();
const userDomainFacade = new UserDomainFacade();

before(async () => {});

describe("User Domain Relational Tests [user-domain.spec]", function () {
  it("[POST] /api/users/{userId}/domains/{domainId}", async function () {
    // add context information
    addContext(this, "Create relation between user and domain.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userDomainFacade.associateUserAndDomain(jwt);
  });

  it("[DELETE] /api/users/{userId}/domains/{domainId}", async function () {
    // add context information
    addContext(this, "Remove relation between user and domain.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await userDomainFacade.unassociateUserAndDomain(jwt);
  });
});
