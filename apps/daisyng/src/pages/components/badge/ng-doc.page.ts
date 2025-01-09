import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleBadgeColorsComponent,
  SampleBadgeComponent,
  SampleBadgeEmptyComponent, SampleBadgeInButtonComponent,
  SampleBadgeOutlineComponent,
  SampleBadgeSizesComponent,
  SampleBadgeWithStateColorComponent,
  SampleBadgeWithTextComponent
} from '@daisyng/sample/badge';

const BadgePage: NgDocPage = {
  title: `Badge`,
  mdFile: './index.md',
  demos: {
    SampleBadgeComponent,
    SampleBadgeColorsComponent,
    SampleBadgeOutlineComponent,
    SampleBadgeSizesComponent,
    SampleBadgeEmptyComponent,
    SampleBadgeWithStateColorComponent,
    SampleBadgeWithTextComponent,
    SampleBadgeInButtonComponent
  },
  category: ComponentsCategory,
};

export default BadgePage;
