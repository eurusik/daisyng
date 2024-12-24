import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleBrandColorsComponent,
  SampleButtonComponent, SampleDisabledButtonComponent,
  SampleOutlineComponent, SampleResponsiveComponent, SampleShapeComponent, SampleSizeComponent,
  SampleStateColorComponent, SampleWideButtonComponent
} from '@daisyng/sample/button';

const ButtonPage: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  demos: { SampleButtonComponent, SampleBrandColorsComponent, SampleStateColorComponent, SampleOutlineComponent, SampleSizeComponent, SampleResponsiveComponent, SampleWideButtonComponent, SampleDisabledButtonComponent, SampleShapeComponent },
  category: ComponentsCategory,
};

export default ButtonPage;
