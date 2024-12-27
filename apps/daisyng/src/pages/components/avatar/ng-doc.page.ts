import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleAvatarComponent,
  SampleAvatarRoundedComponent,
  SampleAvatarSizeComponent
} from '@daisyng/sample/avatar';

const AvatarPage: NgDocPage = {
  title: `Avatar`,
  mdFile: './index.md',
  demos: {
    SampleAvatarComponent,
    SampleAvatarSizeComponent,
    SampleAvatarRoundedComponent
  },
  category: ComponentsCategory,
};

export default AvatarPage;
