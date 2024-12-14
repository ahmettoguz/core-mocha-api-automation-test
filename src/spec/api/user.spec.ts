import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import UserFacade from "src/facade/UserFacade";

const facade = new UserFacade();
const helperFacade = new HelperFacade();

before(async () => {});

describe("User Tests [user.spec]", function () {
  it("[POST] /api/users", async function () {
    // add context information
    addContext(this, "Create user.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.create(jwt);
  });

  it("[GET] /api/users", async function () {
    // add context information
    addContext(this, "Reading all users.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.readAll(jwt);
  });

  it("[GET] /api/users/{id}", async function () {
    // add context information
    addContext(this, "Reading user with id.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.readWithId(jwt);
  });

  it("[GET] /api/users/paged", async function () {
    // add context information
    addContext(this, "Reading users paged and sorted.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.readPagedSorted(jwt);
  });

  it("[GET] /api/users/count", async function () {
    // add context information
    addContext(this, "Reading users count.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.count(jwt);
  });

  it("[GET] /api/users/search/exact", async function () {
    // add context information
    addContext(this, "Searching user by exact first name.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.searchByExactName(jwt);
  });

  it("[GET] /api/users/search/partial", async function () {
    // add context information
    addContext(this, "Searching user by partial first name.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.searchByPartialName(jwt);
  });

  it("[PUT] /api/users/{id}", async function () {
    // add context information
    addContext(this, "Update user.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.update(jwt);
  });

  it("[PATCH] /api/users/${id}/password", async function () {
    // add context information
    addContext(this, "User password update.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.updateUserPassword(jwt);
  });

  it("[PATCH] /api/users/${id}/deactivate", async function () {
    // add context information
    addContext(this, "Deactivate user.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.deactivate(jwt);
  });

  it("[PATCH] /api/users/${id}/activate", async function () {
    // add context information
    addContext(this, "Activate user.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.activate(jwt);
  });

  it("[DELETE] /api/users/${id}", async function () {
    // add context information
    addContext(this, "Delete user.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await facade.delete(jwt);
  });
});
