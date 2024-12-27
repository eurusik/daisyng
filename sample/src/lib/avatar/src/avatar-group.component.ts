import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, AvatarGroupComponent } from '@daisyng/kit/components/avatar';
import { AvatarImageDirective } from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'smp-avatar-group',
  imports: [
    CommonModule,
    AvatarComponent,
    AvatarImageDirective,
    AvatarGroupComponent,
  ],
  templateUrl: './avatar-group.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 }`,
})
export class SampleAvatarGroupComponent {}
