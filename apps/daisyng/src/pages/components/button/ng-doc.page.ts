import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { SampleButtonComponent } from '@daisyng/sample/button';

const ButtonPage: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  demos: { SampleButtonComponent },
  category: ComponentsCategory,
};

export default ButtonPage;
