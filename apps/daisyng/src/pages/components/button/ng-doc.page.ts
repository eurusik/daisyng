import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleBrandColorsComponent,
  SampleButtonComponent,
  SampleOutlineComponent, SampleResponsiveComponent, SampleSizeComponent,
  SampleStateColorComponent
} from '@daisyng/sample/button';

const ButtonPage: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  demos: { SampleButtonComponent, SampleBrandColorsComponent, SampleStateColorComponent, SampleOutlineComponent, SampleSizeComponent, SampleResponsiveComponent },
  category: ComponentsCategory,
};

export default ButtonPage;
