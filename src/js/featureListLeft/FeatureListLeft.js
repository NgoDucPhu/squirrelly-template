import * as Sqrl from 'squirrelly';
import { featureListLeft } from '../../view/container/featureListLeft';


class FeatureListLeft {
  constructor() {}

  get htmlString() {
    return Sqrl.render(featureListLeft, {
      src1: "../../images/real-time.png",
      src2: "../../images/latest-modern.png",
      src3: "../../images/creative.png",
      src4: "../../images/excellent.png"
    });
  }
}

export default FeatureListLeft;
