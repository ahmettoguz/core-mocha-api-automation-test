import Config from "src/config/Config";
import CommonUtil from "src/util/CommonUtil";
import CoreEntityService from "./core/CoreEntityService";

class ProjectService extends CoreEntityService {
  constructor() {
    super("projects");
  }

  async getDefaultCreateData() {
    return {
      title: `${
        Config.preKey
      }${CommonUtil.generateRandomWord()}_newProjectTitle`,
      progress: CommonUtil.generateRandomNumber(0, 100),
      isActive: true,
    };
  }
}

export default ProjectService;
