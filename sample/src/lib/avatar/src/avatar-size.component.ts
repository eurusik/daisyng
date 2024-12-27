import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';
import { AvatarDirective } from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'smp-avatar-size',
  imports: [CommonModule, AvatarComponent, AvatarDirective],
  templateUrl: './avatar-size.component.html',
  styles: `:host { @apply flex items-center justify-center flex-wrap gap-2 }`,
})
export class SampleAvatarSizeComponent {}