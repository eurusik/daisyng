import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDescriptionDirective, AlertDirective, AlertTitleDirective } from '@daisyng/kit/directives/alert';
import { ButtonDirective } from '@daisyng/kit/directives/button';

@Component({
  selector: 'smp-alert-with-title',
  imports: [
    CommonModule,
    AlertDirective,
    ButtonDirective,
    AlertTitleDirective,
    AlertDescriptionDirective,
  ],
  templateUrl: './alert-with-title.component.html',
  styles: `:host { display: flex; margin: 20px }`,
})
export class SampleAlertWithTitleComponent {}
