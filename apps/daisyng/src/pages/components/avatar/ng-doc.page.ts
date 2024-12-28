import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleAvatarComponent,
  SampleAvatarRoundedComponent,
  SampleAvatarSizeComponent,
  SampleAvatarWithRingComponent,
  SampleAvatarGroupComponent,
  SampleAvatarIndicatorComponent,
  SampleAvatarPlaceholderComponent,
  SampleAvatarGroupWithCounterComponent,
} from '@daisyng/sample/avatar';

const AvatarPage: NgDocPage = {
  title: `Avatar`,
  mdFile: './index.md',
  demos: {
    SampleAvatarComponent,
    SampleAvatarSizeComponent,
    SampleAvatarRoundedComponent,
    SampleAvatarWithRingComponent,
    SampleAvatarGroupComponent,
    SampleAvatarIndicatorComponent,
    SampleAvatarPlaceholderComponent,
    SampleAvatarGroupWithCounterComponent,
  },
  category: ComponentsCategory,
};

export default AvatarPage;
