import * as Sqrl from 'squirrelly';
import { featureListRight } from "../../view/container/featureListRight";

class FeatureListRight {

  constructor() { }

  get htmlString() {
    const obj = {
      src1: "../../images/on-time.png",
      src2: "../../images/practical.png",
      src3: "../../images/strong-contact.png",
      src4: "../../images/professional-design.png"
    };

    return Sqrl.render(featureListRight, obj);
  }
}

export default FeatureListRight;
