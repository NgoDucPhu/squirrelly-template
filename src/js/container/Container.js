import * as Sqrl from 'squirrelly';
import FeatureBox from "../featureBox/FeatureBox";
import FeatureListLeft from "../featureListLeft/FeatureListLeft";
import FeatureListRight from "../featureListRight/FeatureListRight";
import { container } from '../../view/container/container';

class Container {
  constructor() {
    this.FeatureListLeftInstance = new FeatureListLeft();
    this.FeatureListRightInstance = new FeatureListRight();
    this.FeatureBoxInstance = new FeatureBox();
  }

  get htmlString() {
    return Sqrl.render(container, {
      obj: {
        listLeft: this.FeatureListLeftInstance.htmlString,
        box: this.FeatureBoxInstance.htmlString,
        listRight: this.FeatureListRightInstance.htmlString
      }
    });
  }
}

export default Container;
