import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import IssueFacade from "src/facade/IssueFacade";

const helperFacade = new HelperFacade();

const issueFacade = new IssueFacade();

before(async () => {});

describe("Issue Tests [issue.spec]", function () {
  it("[POST] /api/issues", async function () {
    // add context information
    addContext(this, "Create issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.create(jwt);
  });

  it("[GET] /api/issues", async function () {
    // add context information
    addContext(this, "Reading all issues.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.readAll(jwt);
  });

  it("[GET] /api/issues/{id}", async function () {
    // add context information
    addContext(this, "Reading issue with id.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.readWithId(jwt);
  });

  it("[GET] /api/issues/paged", async function () {
    // add context information
    addContext(this, "Reading issues paged and sorted.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.readPagedSorted(jwt);
  });

  it("[GET] /api/issues/count", async function () {
    // add context information
    addContext(this, "Reading issues count.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.count(jwt);
  });

  it("[PUT] /api/issues/{id}", async function () {
    // add context information
    addContext(this, "Update issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.update(jwt);
  });

  it("[PATCH] /api/issues/${id}/deactivate", async function () {
    // add context information
    addContext(this, "Deactivate issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.deactivate(jwt);
  });

  it("[PATCH] /api/issues/${id}/activate", async function () {
    // add context information
    addContext(this, "Activate issue.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.activate(jwt);
  });

  it("[DELETE] /api/issues/${id}", async function () {
    // add context information
    addContext(this, "Delete issues.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await issueFacade.delete(jwt);
  });
});
