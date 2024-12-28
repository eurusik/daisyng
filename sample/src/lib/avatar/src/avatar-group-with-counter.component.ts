import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, AvatarGroupComponent } from '@daisyng/kit/components/avatar';

@Component({
  selector: 'smp-avatar-group-with-counter',
  imports: [
    CommonModule,
    AvatarComponent,
    AvatarGroupComponent,
  ],
  templateUrl: './avatar-group-with-counter.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 }`,
})
export class SampleAvatarGroupWithCounterComponent {}
