import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SampleAlertComponent,
  SampleAlertErrorComponent,
  SampleAlertInfoComponent,
  SampleAlertSuccessComponent,
  SampleAlertWarningComponent,
  SampleAlertWithButtonsComponent,
  SampleAlertWithTitleComponent,
} from '@daisyng/sample/alert';

const AlertPage: NgDocPage = {
  title: `Alert`,
  mdFile: './index.md',
  demos: {
    SampleAlertComponent,
    SampleAlertInfoComponent,
    SampleAlertSuccessComponent,
    SampleAlertWarningComponent,
    SampleAlertErrorComponent,
    SampleAlertWithButtonsComponent,
    SampleAlertWithTitleComponent,
  },
  category: ComponentsCategory,
};

export default AlertPage;
