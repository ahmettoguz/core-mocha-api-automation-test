import addContext from "mochawesome/addContext";
import HelperFacade from "src/facade/HelperFacade";
import ProjectFacade from "src/facade/ProjectFacade";

const helperFacade = new HelperFacade();
const projectFacade = new ProjectFacade();

before(async () => {});

describe("Project Tests [project.spec]", function () {
  it("[POST] /api/projects", async function () {
    // add context information
    addContext(this, "Create project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.create(jwt);
  });

  it("[GET] /api/projects", async function () {
    // add context information
    addContext(this, "Reading all projects.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.readAll(jwt);
  });

  it("[GET] /api/projects/{id}", async function () {
    // add context information
    addContext(this, "Reading project with id.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.readWithId(jwt);
  });

  it("[GET] /api/projects/paged", async function () {
    // add context information
    addContext(this, "Reading projects paged and sorted.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.readPagedSorted(jwt);
  });

  it("[GET] /api/projects/count", async function () {
    // add context information
    addContext(this, "Reading projects count.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.count(jwt);
  });

  it("[PUT] /api/projects/{id}", async function () {
    // add context information
    addContext(this, "Update project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.update(jwt);
  });

  it("[PATCH] /api/projects/${id}/deactivate", async function () {
    // add context information
    addContext(this, "Deactivate project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.deactivate(jwt);
  });

  it("[PATCH] /api/projects/${id}/activate", async function () {
    // add context information
    addContext(this, "Activate project.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.activate(jwt);
  });

  it("[DELETE] /api/projects/${id}", async function () {
    // add context information
    addContext(this, "Delete projects.");

    // get admin jwt
    const jwt = await helperFacade.getAdminJwt();

    // perform operation
    await projectFacade.delete(jwt);
  });
});
