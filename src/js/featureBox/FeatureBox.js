import * as Sqrl from 'squirrelly';
import {featureBox} from '../../view/container/featureBox';

class FeatureBox {
  constructor() {}

  get htmlString() {
    return Sqrl.render(featureBox, {
        src: '../../images/center.png'
    });
  }
}

export default FeatureBox;
