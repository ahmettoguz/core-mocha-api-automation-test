import Config from "src/config/Config";
import CommonUtil from "src/util/CommonUtil";
import CoreEntityService from "./core/CoreEntityService";

class IssueService extends CoreEntityService {
  constructor() {
    super("issues");
  }

  async getDefaultCreateData() {
    return {
      title: `${
        Config.preKey
      }${CommonUtil.generateRandomWord()}_newIssueTitle`,
      description: `${
        Config.preKey
      }${CommonUtil.generateRandomWord()}_newIssueDescription`,
      isActive: true,
    };
  }
}

export default IssueService;
